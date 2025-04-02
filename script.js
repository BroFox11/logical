const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Welcome, Admin!");
} else {
    console.log("Access denied");
}

const hasSearchTerm = false;
const hasCategorySelected = true;

if (hasSearchTerm || hasCategorySelected) {
    console.log("Filters applied.");
}

const isBanned = false;
const isActive = false;

if (isBanned || !isActive) {
    console.log("Hide submit button");
}

const LoggedIn = true;
const isSubscribed = true;

if (LoggedIn && isSubscribed) {
    console.log("Show premium content.")
}

const discount = 10;
const isHoliday = true;

if (discount > 0 && isHoliday) {
    console.log("Apply holiday discount.")
}

const agreedToTerms = false;

if (!agreedToTerms) {
    console.log("You must agree to terms first.")
}

const registerLessThan7Days = true;
const profileIncomplete = true;

if (registerLessThan7Days || profileIncomplete) {
    console.log("Welcome! Finish setting up your profile.")
}

function checkUserForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name !== ""  && email !== "") {
        document.getElementById("formMessage").textContent = "Form complete!";
    } else {
        document.getElementById("formMessage").textContent = "Please fill in both fields."
    }
}

function checkDiscount() {
    const checked =
    discount.getElementById("studentDiscount").checked;
    const quantity = 
    document.getElementById("quantity").value;

    if (checked && quantity > 2) {
        document.getElementById("discountMsg").textContent = "Discount Applied!"
    } else {
        document.getElementById("discountMsg").textContent = "No discount available."
    }
}

function showBadge() {
    const status = 
    document.getElementById("status").value;
    const points = document.getElementById("points").value;

    if (status === "active" && points >= 100) {
        document.getElementById("badgeMsg").textContent = "You earned a badge!"
    } else {
        document.getElementById("badgeMsg").textContent = "No badge yet."
    }
}

function toggleNotice() {
    const notify = 
    document.getElementById("notifyBox").checked;

    if (!notify) {
        document.getElementById("notify.Msg").textContent = "Notification are Off"
    } else {
        document.getElementById("notify.Msg").textContent = "Notification are ON"
    }
}