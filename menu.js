function setupMenuFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const categories = document.querySelectorAll(".menu-category");
  const menuSection = document.querySelector(".menu-section");

  if (filterBtns.length === 0 || categories.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      categories.forEach((category) => {
        const categoryKey = category.getAttribute("data-category");
        const visible = filter === "all" || categoryKey === filter;

        category.classList.toggle("hidden", !visible);
        category.classList.toggle("fade-in", visible);
      });

      if (menuSection) menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

setupMenuFilters();

