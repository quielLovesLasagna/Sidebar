"use strict";

// ---- ELEMENTS ---- //
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
// ---- ELEMENTS ---- //

// ---- FUNCTIONS ---- //
// Open sidebar
const openSidebar = () => sidebar.classList.toggle("show-sidebar");

// Close sidebar
const closeSidebar = () => sidebar.classList.remove("show-sidebar");
// ---- END OF FUNCTIONS ---- //

// ---- EVENT HANDLERS ---- //
// Toggle button handler
toggleBtn.addEventListener("click", openSidebar);

// Close button handler
closeBtn.addEventListener("click", closeSidebar);
// ---- END OF EVENT HANDLERS ---- //
