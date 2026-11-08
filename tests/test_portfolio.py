"""End-to-end UI tests for the portfolio site.

Run against the dev server:      pytest
Run against the built preview:   pytest --base-url http://localhost:4173
"""
import re

import pytest
from playwright.sync_api import Page, expect


@pytest.fixture(autouse=True)
def open_home(page: Page):
    page.goto("/")


def test_title_and_headline(page: Page):
    expect(page).to_have_title(re.compile("David Maharjan"))
    expect(page.get_by_role("heading", level=1)).to_be_visible()


def test_photo_or_initials_is_shown(page: Page):
    expect(page.get_by_test_id("photo").or_(page.get_by_test_id("photo-fallback"))).to_be_visible()


@pytest.mark.parametrize("name, url", [("LinkedIn", "linkedin.com/in/"), ("GitHub", "github.com/")])
def test_social_links_open_profile_in_new_tab(page: Page, name: str, url: str):
    link = page.get_by_test_id("socials").first.get_by_role("link", name=name)
    expect(link).to_be_visible()
    expect(link).to_have_attribute("href", re.compile(re.escape(url)))
    expect(link).to_have_attribute("target", "_blank")
    expect(link).to_have_attribute("rel", re.compile("noopener"))


def test_email_button_shows_address_and_options(page: Page):
    socials = page.get_by_test_id("socials").first
    socials.get_by_role("button", name="Email").click()
    panel = socials.get_by_test_id("email-panel")
    expect(panel).to_contain_text("@")
    expect(panel.get_by_role("link", name="Open in Gmail")).to_have_attribute(
        "href", re.compile(r"^https://mail\.google\.com/.*to="))
    expect(panel.get_by_role("link", name="Open mail app")).to_have_attribute("href", re.compile(r"^mailto:.+@.+"))
    panel.get_by_role("button", name="Close").click()
    expect(panel).to_be_hidden()


def test_copy_email(page: Page, context):
    context.grant_permissions(["clipboard-read", "clipboard-write"])
    socials = page.get_by_test_id("socials").first
    socials.get_by_role("button", name="Email").click()
    socials.get_by_test_id("copy-email").click()
    expect(socials.get_by_test_id("copy-email")).to_have_text("Copied")
    assert "@" in page.evaluate("navigator.clipboard.readText()")


def test_cv_downloads_as_pdf(page: Page):
    with page.expect_download() as info:
        page.get_by_test_id("cv-download").first.click()
    assert info.value.suggested_filename.endswith(".pdf")


def test_theme_toggle_switches_and_is_remembered(page: Page):
    html = page.locator("html")
    start = html.get_attribute("data-theme")
    assert start in ("light", "dark")
    page.get_by_test_id("theme-toggle").click()
    flipped = "dark" if start == "light" else "light"
    expect(html).to_have_attribute("data-theme", flipped)
    page.reload()
    expect(html).to_have_attribute("data-theme", flipped)


def test_theme_changes_background_colour(page: Page):
    before = page.evaluate("getComputedStyle(document.body).backgroundColor")
    page.get_by_test_id("theme-toggle").click()
    page.wait_for_timeout(400)  # colour transition
    after = page.evaluate("getComputedStyle(document.body).backgroundColor")
    assert before != after


@pytest.mark.parametrize("section", ["services", "process", "work", "journey", "contact"])
def test_nav_links_scroll_to_sections(page: Page, section: str):
    page.set_viewport_size({"width": 1280, "height": 800})
    page.locator(f'.nav a[href="#{section}"]').click()
    expect(page.locator(f"#{section}")).to_be_in_viewport()


def test_work_section_shows_projects(page: Page):
    expect(page.get_by_test_id("work-card")).to_have_count(4)


def test_every_external_link_opens_safely(page: Page):
    for link in page.locator('a[target="_blank"]').all():
        assert "noopener" in (link.get_attribute("rel") or "")


@pytest.mark.parametrize("width", [375, 768, 1280])
def test_no_horizontal_scroll(page: Page, width: int):
    page.set_viewport_size({"width": width, "height": 800})
    overflow = page.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
    assert overflow <= 0


def test_mobile_menu_opens_and_navigates(page: Page):
    page.set_viewport_size({"width": 375, "height": 740})
    nav = page.locator("#site-nav")
    expect(nav).to_be_hidden()
    page.get_by_role("button", name="Menu").click()
    expect(nav).to_be_visible()
    nav.get_by_role("link", name="Work").click()
    expect(nav).to_be_hidden()
    expect(page.locator("#work")).to_be_in_viewport()
