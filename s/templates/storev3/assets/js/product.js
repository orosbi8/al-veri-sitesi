const first_variation_html_dropdown_mobile = `
<div class="lg:hidden dropdown-first-variation dropdown-custom pointer-events-none" id="first_variation_group_clone">
    <button class="select-btn dropdown-toggle dropdown-btn-toggle_first_variation_group input-required" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#sizeSheet" aria-controls="sizeSheet">
        <div class="select-body">
            <div class="select-name"><span class="shopier-store—product—product-form—first-variation-label">${
              $product.variations?.variation_1_name
            }</span></div>
            <div class="select-value"><span class="dropdown-selected selected-first_variation_group"></span></div>
        </div>
        <div class="input-icon">
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4995 17.2996C11.7995 17.2996 11.0995 17.0296 10.5695 16.4996L4.04953 9.97965C3.75953 9.68965 3.75953 9.20965 4.04953 8.91965C4.33953 8.62965 4.81953 8.62965 5.10953 8.91965L11.6295 15.4396C12.1095 15.9196 12.8895 15.9196 13.3695 15.4396L19.8895 8.91965C20.1795 8.62965 20.6595 8.62965 20.9495 8.91965C21.2395 9.20965 21.2395 9.68965 20.9495 9.97965L14.4295 16.4996C13.8995 17.0296 13.1995 17.2996 12.4995 17.2996Z"
                      fill="#0B0F34"/>
            </svg>
        </div>
    </button>
    <div class="offcanvas offcanvas-bottom action-sheet bottom-sheet dropdown-custom-offcanvas dropdown_items_first_variation_group" tabindex="-1"
         id="sizeSheet" aria-labelledby="sizeSheetLabel">
        <div class="offcanvas-header">
            <button class="hidden" type="button" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            <div class="action-sheet-swipe-btn"></div>
        </div>
        <div class="offcanvas-body relative">
            <div class="action-sheet-title" id="sizeSheetLabel">${
              $product.variations?.variation_1_name
            }
            </div>
            <div class="action-sheet-options shopier-store—product—product-form—first-variation" id="dropdown_items_first_variation_group">
                ${$product.variations?.variation_1
                  ?.map((variation) =>
                    variation.stock > 0
                      ? `
                  <div>
                    <label class="input-radio dropdown-item" data-value="${variation.id}">
                        <div class="input-body">
                            <div class="input-name dropdown-input shopier-store—product—product-form—first-variation-option">${variation.name}</div>
                        </div>
                        <input type="radio" name="first" value="${variation.id}" class="dropdown-input pointer-events-none">
                    </label>
                  </div>
                  `
                      : ""
                  )
                  .join("")}
            </div>
            ${
              $product.variations?.variation_2
                ? $product.variations?.variation_1 > 6
                  ? `<div class="variation-effect clear-variation-effect variation-effect-first"></div>`
                  : ""
                : $product.variations?.variation_1 > 6
                ? `<div class="variation-effect clear-variation-effect-2"></div>`
                : ""
            }
        </div>
        ${
          $product.variations?.variation_2
            ? `
            <div class="offcanvas-footer">
                <div class="action-sheet-footer">
                    <div class="clear-variation-btn clear-variation-btn_first_variation_group pointer-events-none">
                        ${$language.clear_selection}
                    </div>
                </div>
            </div>
          `
            : ""
        }
    </div>
</div>
`;

const second_variation_html_dropdown_mobile = `
<div class="lg:hidden dropdown-second-variation dropdown-custom pointer-events-none input-required" id="second_variation_group_clone">
    <button class="select-btn dropdown-toggle dropdown-btn-toggle_second_variation_group input-required" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#secondVar" aria-controls="secondVar">
        <div class="select-body">
            <div class="select-name"><span class="shopier-store—product—product-form—second-variation-label">${
              $product.variations?.variation_2_name
            }</span></div>
            <div class="select-value"><span class="dropdown-selected selected-second_variation_group sub-selected" ></span></div>
        </div>
        <div class="input-icon">
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4995 17.2996C11.7995 17.2996 11.0995 17.0296 10.5695 16.4996L4.04953 9.97965C3.75953 9.68965 3.75953 9.20965 4.04953 8.91965C4.33953 8.62965 4.81953 8.62965 5.10953 8.91965L11.6295 15.4396C12.1095 15.9196 12.8895 15.9196 13.3695 15.4396L19.8895 8.91965C20.1795 8.62965 20.6595 8.62965 20.9495 8.91965C21.2395 9.20965 21.2395 9.68965 20.9495 9.97965L14.4295 16.4996C13.8995 17.0296 13.1995 17.2996 12.4995 17.2996Z"
                      fill="#0B0F34"/>
            </svg>
        </div>
    </button>
    <div class="offcanvas offcanvas-bottom action-sheet bottom-sheet dropdown-custom-offcanvas dropdown_items_second_variation_group" tabindex="-1"
         id="secondVar" aria-labelledby="sizeSheetLabel">
        <div class="offcanvas-header">
            <button class="hidden" type="button" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            <div class="action-sheet-swipe-btn"></div>
        </div>
        <div class="offcanvas-body">
            <div class="action-sheet-title" id="sizeSheetLabel">${
              $product.variations?.variation_2_name
            }
            </div>
            <div class="action-sheet-options shopier-store—product—product-form—second-variation" id="dropdown_items_second_variation_group">
                ${$product.variations?.variation_2
                  ?.map((variation) =>
                    variation.stock > 0
                      ? `
                  <div>
                    <label class="input-radio dropdown-item second-var_item" data-value="${variation.id}">
                        <div class="input-body">
                            <div class="input-name dropdown-input shopier-store—product—product-form—second-variation-option">${variation.name}</div>
                        </div>
                        <input type="radio" name="second" value="${variation.id}" class="dropdown-input pointer-events-none">
                    </label>
                  </div>
                  `
                      : ""
                  )
                  .join("")}
            </div>
            ${
              $product.variations?.variation_2?.length > 6
                ? `<div class="variation-effect clear-variation-effect variation-effect-second"></div>`
                : ""
            }
        </div>
        <div class="offcanvas-footer">
            <div class="action-sheet-footer">
                <div class="clear-variation-btn clear-variation-btn_second_variation_group pointer-events-none">
                    ${$language.clear_selection}
                </div>
            </div>
        </div>
    </div>
</div>
`;

const first_variation_html_dropdown_desktop = `
<div class="dropdown hidden lg:block dropdown-first-variation dropdown-custom pointer-events-none" id="first_variation_group_clone">
    <button class="dropdown-toggle select-btn dropdown-btn-toggle_first_variation_group input-required" type="button"
            aria-expanded="false"
            data-bs-offset="0,-1" data-bs-toggle="dropdown">
        <div class="select-body">
            <div class="select-name"><span class="shopier-store—product—product-form—first-variation-label">${
              $product.variations?.variation_1_name
            }</span></div>
            <div class="select-value dropdown-selected selected-first_variation_group"><span></span></div>
        </div>
        <div class="input-icon">
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4995 17.2996C11.7995 17.2996 11.0995 17.0296 10.5695 16.4996L4.04953 9.97965C3.75953 9.68965 3.75953 9.20965 4.04953 8.91965C4.33953 8.62965 4.81953 8.62965 5.10953 8.91965L11.6295 15.4396C12.1095 15.9196 12.8895 15.9196 13.3695 15.4396L19.8895 8.91965C20.1795 8.62965 20.6595 8.62965 20.9495 8.91965C21.2395 9.20965 21.2395 9.68965 20.9495 9.97965L14.4295 16.4996C13.8995 17.0296 13.1995 17.2996 12.4995 17.2996Z"
                      fill="#0B0F34"/>
            </svg>
        </div>
    </button>
    <div class="dropdown-menu dropdown-menu-variation dropdown_items_first_variation_group" data-popper-placement="bottom-start">
        <div class="select-list">
            <div class="select-list-component shopier-store—product—product-form—first-variation" id="dropdown_items_first_variation_group">
                ${
                  $product.variations?.variation_2
                    ? `<div class="dropdown-title">${$product.variations?.variation_1_name}</div>`
                    : ""
                }
                ${$product.variations?.variation_1
                  ?.map((variation) =>
                    variation.stock > 0
                      ? `
                        <div class="dropdown-item" data-value="${variation.id}"><label class="input-radio">
                            <div class="input-body">
                                <div class="input-name dropdown-input shopier-store—product—product-form—first-variation-option">${variation.name}</div>
                            </div>
                                <input type="radio" name="first" value="${variation.id}"
                                       data-label="${variation.name}" class="dropdown-input pointer-events-none">
                        </label>
                    </div>
                  `
                      : ""
                  )
                  .join("")}
            </div>
            ${
              $product.variations?.variation_2
                ? $product.variations?.variation_1?.length > 10
                  ? `<div class="variation-effect clear-variation-effect-desktop variation-effect-first"></div>`
                  : ""
                : $product.variations?.variation_1?.length > 10
                ? `<div class="variation-effect clear-variation-effect-desktop-2"></div>`
                : ""
            }
        </div>
        ${
          $product.variations?.variation_2
            ? `
            <div class="clear-variation-div">
                <div class="clear-variation-btn clear-variation-btn_first_variation_group pointer-events-none">
                    ${$language.clear_selection}
                </div>
            </div>
          `
            : ""
        }
    </div>
</div>
`;

const second_variation_html_dropdown_desktop = `
<div class="dropdown hidden lg:block dropdown-second-variation dropdown-custom pointer-events-none" id="second_variation_group_clone">
    <button class="dropdown-toggle select-btn dropdown-btn-toggle_second_variation_group input-required" type="button"
            aria-expanded="false"
            data-bs-offset="0,-1" data-bs-toggle="dropdown">
        <div class="select-body">
            <div class="select-name"><span class="shopier-store—product—product-form—second-variation-label">${
              $product.variations?.variation_2_name
            }</span></div>
            <div class="select-value dropdown-selected selected-second_variation_group sub-selected"><span></span></div>
        </div>
        <div class="input-icon">
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4995 17.2996C11.7995 17.2996 11.0995 17.0296 10.5695 16.4996L4.04953 9.97965C3.75953 9.68965 3.75953 9.20965 4.04953 8.91965C4.33953 8.62965 4.81953 8.62965 5.10953 8.91965L11.6295 15.4396C12.1095 15.9196 12.8895 15.9196 13.3695 15.4396L19.8895 8.91965C20.1795 8.62965 20.6595 8.62965 20.9495 8.91965C21.2395 9.20965 21.2395 9.68965 20.9495 9.97965L14.4295 16.4996C13.8995 17.0296 13.1995 17.2996 12.4995 17.2996Z"
                  fill="#0B0F34"/>
            </svg>
        </div>
    </button>
    <div class="dropdown-menu dropdown-menu-variation dropdown_items_second_variation_group" data-popper-placement="bottom-start">
        <div class="select-list">
            <div class="select-list-component shopier-store—product—product-form—second-variation"  id="dropdown_items_second_variation_group">
                <div class="dropdown-title">${
                  $product.variations?.variation_2_name
                }</div>
                ${$product.variations?.variation_2
                  ?.map((variation) =>
                    variation.stock > 0
                      ? `
                    <div class="dropdown-item" data-value="${variation.id}"><label class="input-radio">
                            <div class="input-body">
                                <div class="input-name dropdown-input shopier-store—product—product-form—second-variation-option">${variation.name}</div>
                            </div>
                                <input type="radio" name="second" value="${variation.id}"
                                       data-label="${variation.name}" class="dropdown-input pointer-events-none">
                        </label>
                    </div>
                  `
                      : ""
                  )
                  .join("")}
            </div>
            ${
              $product.variations?.variation_2?.length > 10
                ? `<div class="variation-effect clear-variation-effect-desktop variation-effect-second"></div>`
                : ""
            }
        </div>
        <div class="clear-variation-div">
            <div class="clear-variation-btn clear-variation-btn_second_variation_group pointer-events-none">
                ${$language.clear_selection}
            </div>
        </div>
    </div>
</div>
`;

document.body.classList.add("page-product");

let buyNowButton = document.getElementById("buy-now-button");
buyNowButton?.addEventListener("click", (e) => {
  let formInputs;
  let invalidInput;
  checkFormElements();
  formInputs = [...document.querySelectorAll(".input-required")];
  invalidInput = formInputs.filter((input) =>
    input.classList.contains("input-error")
  );
  if (invalidInput.length > 0) {
    setNotValidBehaviour(isMobileView, invalidInput);
    return;
  }
  buyNowButton.classList.add("pointer-events-none");
  createLottieAnimationBtnLoad(
    "#buy-now-button",
    "loadingBtnPurple",
    "purple",
    "",
    false
  );
  const url = $urls.check_payment_progress;

  const data = "";
  e.preventDefault();
  sendRequest("POST", url, data, function (http) {
    if (
      http.getResponseHeader("content-type").includes("application/json") ===
      false
    ) {
      showModal("", $language.client_error_message, true);
      return;
    }
    let { status, total_price } = http.response;
    handleGenericErrors({ status: status, total_price: total_price });
  });
});

document?.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    if (document.querySelector("#second_variation_group")) {
      document.getElementById("second_variation_group").selectedIndex = 0;
    }
    if (document.querySelector("#first_variation_group")) {
      document.getElementById("first_variation_group").selectedIndex = 0;
    }
    const checkedRadio = document.querySelector(
      'input[type="radio"][name="firstVariation"]:checked'
    );
    if (checkedRadio) {
      checkedRadio.checked = false;
    }
  }
});

document.getElementById("shareButton").addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: $language.share_text,
        text: $product.name,
        url: $product.absolute_link
      });
    } catch (error) {}
  }
});

function triggerAppNotification(args) {
  showInvalidModal({ message: args.message });
}

function triggerModalNotification(args) {
  showInvalidModal({
    title: args["modal_header_title"],
    message: args["modal_body"]
  });
}

function enableSubmitBtn() {
  document.querySelector(".btn-buy-now")?.removeAttribute("disabled");
  document.querySelector(".btn-add-to-cart")?.removeAttribute("disabled");
}

function disableSubmitBtn() {
  document.querySelector(".btn-buy-now")?.setAttribute("disabled", "true");
  document.querySelector(".btn-add-to-cart")?.setAttribute("disabled", "true");
}

function dropdownCreator(htmlContent, id) {
  const selectElement = document.getElementById(id);
  if (selectElement) {
    const parentElement = selectElement;
    parentElement.classList.add("hidden");
    parentElement.insertAdjacentHTML("afterend", htmlContent);
  }
}

function updateDropdownValue({
  variationId,
  selectedValue,
  selectedText,
  variationGroupEl,
  dropdownSelected
}) {
  if (variationId) {
    variationId.value = selectedValue;
    variationGroupEl.value = selectedValue;
  }
  dropdownSelected.setAttribute("data-value", selectedValue);
  variationGroupEl
    .closest(".select--product-page")
    .setAttribute("data-value", selectedValue);
  if (selectedValue != -1) {
    dropdownSelected.innerHTML = "<span>" + selectedText + "</span>";
    variationGroupEl.dispatchEvent(new Event("change", { bubbles: true }));
  } else {
    dropdownSelected.innerHTML = "";
  }
}

function selectVariations(varId, id) {
  const dropdownItems = document.querySelector(`.dropdown_items_${id}`);
  const clearVariationBtn = document.querySelector(
    `.clear-variation-btn_${id}`
  );
  const bottomSheet = document.querySelector(`.dropdown_items_${id}`);
  if (dropdownItems) {
    dropdownItems.removeEventListener("click", handleDropdownClick);
    dropdownItems.addEventListener("click", handleDropdownClick);
    clearVariationBtn?.removeEventListener("click", handleClearSelection);
    clearVariationBtn?.addEventListener("click", handleClearSelection);
  }

  function closeBottomSheet() {
    if (isMobileView && bottomSheet) {
      let sheetInstance = bootstrap.Offcanvas.getInstance(bottomSheet);
      sheetInstance?.hide();
    } else if (!isMobileView) {
      bottomSheet?.classList.remove("show");
      document
        .querySelector(`.dropdown-btn-toggle_${id}`)
        ?.classList.remove("show");
    }
  }

  function handleDropdownClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const targetItem = e.target.closest(".dropdown-item");
    if (!targetItem) return;

    const inputEl = targetItem.querySelector('input[type="radio"]');
    if (!inputEl) return;

    const variationId = document.getElementById(varId);
    const variationGroupEl = document.getElementById(id);
    const dropdownElement = document.getElementById(`${id}_clone`);
    const dropdownSelected =
      dropdownElement.querySelector(".dropdown-selected");
    const oldVal = variationId.value;
    const clickedVal = targetItem.getAttribute("data-value");
    const isAlreadySelected = oldVal === clickedVal;

    if (isAlreadySelected) {
      updateDropdownValue({
        variationId,
        selectedValue: -1,
        selectedText: "",
        variationGroupEl,
        dropdownSelected
      });
      clearVariationBtn?.classList.remove("active");
      clearVariationBtn?.classList.add("pointer-events-none");
      inputEl.checked = false;
      const firstVariationGroup = document.getElementById(
        "first_variation_group"
      );
      const secondVariationGroup = document.getElementById(
        "second_variation_group"
      );
      if (
        firstVariationGroup?.value == -1 &&
        secondVariationGroup?.value == -1
      ) {
        resetFirstVariations();
        resetSecondVariations();
      }
    } else {
      const selectedText = targetItem.querySelector(".input-name").textContent;
      updateDropdownValue({
        variationId,
        selectedValue: clickedVal,
        selectedText,
        variationGroupEl,
        dropdownSelected
      });
      clearVariationBtn?.classList.add("active");
      clearVariationBtn?.classList.remove("pointer-events-none");
      document
        .querySelectorAll(`.dropdown_items_${id} input[type="radio"]`)
        .forEach((radio) => {
          radio.checked = false;
        });
      inputEl.checked = true;
    }

    if (!isAlreadySelected && clickedVal !== -1) {
      closeBottomSheet();
    }
  }

  function handleClearSelection() {
    const firstVarClone = document.getElementById(
      "first_variation_group_clone"
    );
    const secondVarClone = document.getElementById(
      "second_variation_group_clone"
    );
    const clearVariationBtn = document.querySelectorAll(".clear-variation-btn");
    resetVariations();
    const firstVarIdEl = document.getElementById("first_variation_id");
    if (firstVarIdEl) firstVarIdEl.value = -1;

    const secondVarIdEl = document.getElementById("second_variation_id");
    if (secondVarIdEl) secondVarIdEl.value = -1;

    firstVarClone.querySelector(".dropdown-selected").innerHTML = "";
    firstVarClone.closest(".select").removeAttribute("data-value");
    if (secondVarClone) {
      secondVarClone.querySelector(".dropdown-selected").innerHTML = "";
      secondVarClone.closest(".select").removeAttribute("data-value");
    }
    clearVariationBtn?.forEach((el) => {
      el.classList.remove("active");
      el.classList.add("pointer-events-none");
    });
    closeBottomSheet();
  }
}

function resetSubVariation() {
  document.querySelector(".sub-selected").value = -1;
}

function hideDropdownIfOutsideClicked(id) {
  let isDropdownOpen = false;
  document.addEventListener("click", function (e) {
    if (document.getElementById(`${id}_clone`) && isDropdownOpen) {
      const isOutsideClick = !document
        .getElementById(`${id}_clone`)
        .contains(e.target);
      const isDropdownInputClick =
        e.target.classList.contains("dropdown-input");

      if (
        (isMobileView && isOutsideClick) ||
        (!isMobileView && (isOutsideClick || isDropdownInputClick))
      ) {
        document
          .querySelector(`.dropdown_items_${id}`)
          .classList.remove("show");
        document
          .querySelector(`.dropdown-btn-toggle_${id}`)
          .classList.remove("show");
        isDropdownOpen = false;
      }
    }
  });

  if (document.getElementById(`${id}_clone`)) {
    document
      .getElementById(`${id}_clone`)
      .addEventListener("click", function () {
        isDropdownOpen = !isDropdownOpen;
      });
  }
}

function setDropdown(htmlContent, id, varId) {
  dropdownCreator(htmlContent, id);
  selectVariations(varId, id);
  hideDropdownIfOutsideClicked(id);
}

function enableIncreaseButton() {
  document
    .querySelector(".check-increase-quantity")
    ?.removeAttribute("disabled");
}

function addOnClickInShoppingBasket() {
  document
    .querySelectorAll(".shopier-template--shopping-cart")
    .forEach(function (el) {
      el.setAttribute("onclick", "return false;");
    });
}

function removeOnClickInShoppingBasket() {
  document
    .querySelectorAll(".shopier-template--shopping-cart")
    .forEach(function (el) {
      el.removeAttribute("onclick");
    });
}

function checkVariationGroup(elementId) {
  let variationGroupEl = document.getElementById(elementId),
    variation_id = 0;
  if (variationGroupEl !== null) {
    variation_id = variationGroupEl.value ?? 0;
    variationGroupEl.addEventListener("change", function () {
      enableIncreaseButton();
    });
  }
  return variation_id;
}

function resetQuantity() {
  document.querySelector("#product-quantity").value = 1;
  document.querySelector("#product-quantity").textContent = "1";
  document
    .querySelector(".check-increase-quantity")
    .classList.remove("input-plus-passive");
  document.querySelector(".check-increase-quantity").disabled = false;
  document
    .querySelector(".check-decrease-quantity")
    .classList.add("input-minus-passive");
  document.querySelector(".check-decrease-quantity").disabled = true;
}

function manageVariations(isDropdownVar, item, selector, checked = -1) {
  if (isDropdownVar) {
    if (item.stock > 0) {
      const isChecked = parseInt(checked) === item.id ? "checked" : "";
      const capitalizedName =
        item.name.charAt(0).toUpperCase() + item.name.slice(1);
      document.querySelector(`#${selector}_variation_group`).innerHTML +=
        `<option value="` + item.id + `">` + item.name + `</option>`;
      document.querySelector(
        `#dropdown_items_${selector}_variation_group`
      ).innerHTML +=
        `<div class="dropdown-item" data-value="` +
        item.id +
        `">
                                      <label class="input-radio ${selector}-var_item">
                                          <div class="input-body">
                                              <div class="input-name dropdown-input">` +
        capitalizedName +
        `</div>
                                          </div>
                                          <input type="radio" name="${selector}" value="` +
        item.id +
        `"
                                                 data-label="` +
        item.name +
        `" ${isChecked} class="dropdown-input pointer-events-none">
                                      </label>
                                  </div></div>`;
    }
  } else {
    const input = document.querySelector(
      `input[type="checkbox"][value="${item.id}"]`
    );
    if (input) {
      if (item.stock === 0) {
        input.disabled = true;
      } else {
        input.disabled = false;
      }
    }
  }
}

function triggerChangeEvent(selector) {
  const secondElements = document.querySelectorAll(`.${selector}-var_item`);
  secondElements.forEach((item) => {
    item.addEventListener("click", function (e) {
      /* to prevent multiple request */
      if (e.target.tagName === "INPUT") {
        return;
      }
      const changeEvent = new Event("change", { bubbles: true });
      document
        .getElementById(`${selector}_variation_group`)
        .dispatchEvent(changeEvent);
    });
  });
}

function checkFormElements() {
  /* Eğer checkboxlı görünüm varsa */
  if ($product.variation_details.length) {
    const checkboxGroupIds = [
      "first_variation_checkboxes",
      "second_variation_checkboxes"
    ];
    checkboxGroupIds.forEach((id) => {
      const group = document.getElementById(id);
      if (group) {
        const checkboxes = group.querySelectorAll(
          'input[type="checkbox"]:not(:disabled)'
        );
        const isAnyChecked = Array.from(checkboxes).some((cb) => cb.checked);
        if (isAnyChecked) {
          group.parentElement.classList.remove("input-error");
        } else {
          group.parentElement.classList.add("input-error");
        }
      }
    });
  } else {
    const firstVar = document.getElementById("first_variation_group");
    const secondVar = document.getElementById("second_variation_group");
    const selectFields = [firstVar, secondVar];
    selectFields.forEach((field) => {
      if (field) {
        const selectValid = Number(field.value) !== -1;
        if (selectValid) {
          field.nextElementSibling.firstElementChild.classList.remove(
            "input-error"
          );
        } else {
          field.nextElementSibling.firstElementChild.classList.add(
            "input-error"
          );
        }
      }
    });
  }
}

function handleGenericErrors(args) {
  const { status, statusMessage, stock, message, total_price } = args;
  switch (status) {
    case "isPaymentContinue":
    case "payment_still_ongoing":
      const { price_legacy_formatted } = total_price;
      const ongoingPriceContainers = document.querySelectorAll(
        ".unpaid-order-total-price"
      );
      ongoingPriceContainers.forEach((el) => {
        el.innerHTML = price_legacy_formatted;
      });
      if (isMobileView) {
        const closedStoreCanvas = new bootstrap.Offcanvas(
          document.getElementById("ongoing-payment-canvas")
        );
        closedStoreCanvas.show();
      } else {
        const closedStoreModal = new bootstrap.Modal(
          document.getElementById("ongoing-payment-modal")
        );
        closedStoreModal.show();
      }
      break;
    case "ok":
      document.getElementById("buy-form").submit();
      break;
    default:
      switch (statusMessage) {
        case "overStock":
          showInvalidModal({
            message: `${$language.warning_stock_max} ${stock} ${$language.warning_stock_max_2}`
          });
          break;
        case "notEqualCurrency":
          showInvalidModal({ message: $language.warning_different_currency });
          break;
        case "not_decrease":
          document.getElementById("product-quantity").stepUp();
          break;
        case "not_increase":
          document.getElementById("product-quantity").stepDown();
          break;
        case "generic_error":
          showInvalidModal({ message: message });
          break;
        case "main_variation_not_exist":
          break;
        case "the_ongoing_payment_canceled":
          document.querySelector("#add-item-to-chart").click();
          break;
        default:
          showInvalidModal({ message: $language.unexpected_error_occurred });
          break;
      }
  }
}

function checkAndSetVarDropdown() {
  if ($page === "product") {
    document.querySelectorAll(".dropdown-custom").forEach((el) => el.remove());
    document
      .querySelectorAll(".dropdown-custom-offcanvas")
      .forEach((el) => el.remove());
    const isMobileView = window.matchMedia("(max-width: 1023px)").matches;
    /* Mobile view */
    if (isMobileView) {
      setDropdown(
        first_variation_html_dropdown_mobile,
        "first_variation_group",
        "first_variation_id"
      );
      setDropdown(
        second_variation_html_dropdown_mobile,
        "second_variation_group",
        "second_variation_id"
      );
    } else {
      /* Desktop view */
      setDropdown(
        first_variation_html_dropdown_desktop,
        "first_variation_group",
        "first_variation_id"
      );
      setDropdown(
        second_variation_html_dropdown_desktop,
        "second_variation_group",
        "second_variation_id"
      );
    }
  }
}

checkAndSetVarDropdown();

let timeoutAnimation, timeoutHidden;
let addItemToChart = document.getElementById("add-item-to-chart");

function setNotValidBehaviour(isMobileView, invalidInput) {
  invalidInput[0].scrollIntoView({ behavior: "smooth", block: "center" });
  invalidInput.forEach((field) => {
    if (field.classList.contains("input-error")) {
      /* Eğer checkboxlı görünüm varsa */
      if ($product.variation_details.length > 0) {
        field.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
          cb.addEventListener("change", function (e) {
            const isChecked = e.target.checked;
            if (isChecked) {
              field.classList.remove("input-error");
            } else {
              field.classList.add("input-error");
            }
          });
        });
      }
    }
  });
}

addItemToChart?.addEventListener(
  "click",
  function () {
    let formInputs;
    let invalidInput;
    checkFormElements();
    formInputs = [...document.querySelectorAll(".input-required")];
    invalidInput = formInputs.filter((input) =>
      input.classList.contains("input-error")
    );
    if (invalidInput.length > 0) {
      setNotValidBehaviour(isMobileView, invalidInput);
      return;
    }
    createLottieAnimationBtnLoad(
      "#add-item-to-chart",
      "loadingBtnWhite",
      "white",
      "",
      false
    );
    addItemToChart.classList.add("pointer-events-none");
    clearTimeout(timeoutAnimation);
    clearTimeout(timeoutHidden);
    document.querySelector(".add-to-cart-message").style.animation = "";
    const url = $urls.add_item_basket;
    const data = new URLSearchParams(
      new FormData(document.getElementById("buy-form"))
    ).toString();
    sendRequest("POST", url, data, function (http) {
      document
        .querySelector(".header-cart-icon")
        .classList.remove("pointer-events-none");
      if (
        http.getResponseHeader("content-type").includes("application/json") ===
        false
      ) {
        showInvalidModal({ message: $language.client_error_message });
        return;
      }
      let response = http.response;
      const {
        statusMessage,
        basket,
        stock,
        status,
        text_for_discount_applicable,
        redirect_product,
        redirect_shoppingcart,
        redirect_shoppingcart_href,
        discount_clickable,
        total_price
      } = response;
      if (parseInt(status) === 1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if ($shopier_app?.tiktok_pixel?.enabled) {
          var ttq = document.getElementById("ttqJs");
          ttq.type = "text/javascript";
          document.head.appendChild(ttq);
          script(
            response.basket.latest_product.type,
            response.basket.latest_product.name,
            response.basket.latest_product.product_id,
            response.basket.latest_product.quantity,
            response.basket.latest_product.description,
            response.basket.latest_product.unit_price.price_formatted,
            response.basket.latest_product.currency
          );
        }
        if ($shopier_app?.fb_pixel?.enabled) {
          var fbPxel = document.getElementById("fbJs");
          fbPxel.type = "text/javascript";
          document.head.appendChild(fbPxel);
          script(
            response.basket.latest_product.name,
            response.basket.latest_product.product_id,
            response.basket.latest_product.unit_price.price_formatted,
            response.basket.latest_product.currency
          );
        }
        if ($shopier_app?.ga_tracker?.enabled) {
          var gaTracker = document.getElementById("gaTracker");
          gaTracker.type = "text/javascript";
          document.head.appendChild(gaTracker);
          sendGaTracker(response.basket.latest_product);
        }
        if (redirect_shoppingcart) {
          window.location.href = redirect_shoppingcart_href;
          return;
        }
        if (redirect_product) {
          document
            .querySelector(".notification-bar")
            .setAttribute("data-redirect-url", redirect_product);
        }

        document
          .querySelector(".notification-bar")
          ?.setAttribute("data-clickable", discount_clickable);
        const { text_for_discount_applicable, button_for_discount_applicable } =
          response;
        if (text_for_discount_applicable === null) {
          document.querySelector("#discount-bar")?.classList.add("!hidden");
          document
            .querySelector("#discount-bar")
            ?.classList.remove("discount-main-layout");
        }
        if (text_for_discount_applicable != null) {
          let discountTimesTamp =
            $discount?.show_discount_notification_timestamp;
          if (!discountTimesTamp) {
            document
              .querySelector("#discount-bar")
              ?.classList.remove("!hidden");
            document
              .querySelector("#discount-bar")
              ?.classList.add("discount-main-layout");
            let discountTextP = document.querySelector(
              "#discount-bar .notification-bar-body p"
            );
            if (discountTextP) {
              discountTextP.innerHTML = text_for_discount_applicable;
            }
            if (button_for_discount_applicable !== null) {
              let additionalText = `<div class="notification-bar-action-btn" type="button">
                          <span>${button_for_discount_applicable}  </span>
                      </div>`;
              let notiBarButton = document.getElementById(
                "notification-bar-button"
              );
              if (notiBarButton) {
                notiBarButton.classList.remove("!hidden");
                notiBarButton.innerHTML = additionalText;
              }
            } else {
              let notiBarButtonText = document.getElementById(
                "notification-bar-button"
              );
              notiBarButtonText?.classList.add("!hidden");
            }
          }
        } else {
          document.querySelector(".notification-bar").classList.add("!hidden");
          document
            .querySelector(".add-to-cart-message")
            .classList.remove("!hidden");
        }
        document
          .querySelectorAll(".header-cart__count")
          ?.forEach(function (el) {
            const { total_product_count } = basket;
            el.innerHTML = total_product_count;
          });
        createLottieAnimationBtnLoad(
          "#add-item-to-chart",
          "loadingBtnWhite",
          "white",
          $language.add_to_cart,
          true
        );
        addItemToChart.classList.remove("pointer-events-none");
      } else {
        addItemToChart.classList.remove("pointer-events-none");
        createLottieAnimationBtnLoad(
          "#add-item-to-chart",
          "loadingBtnWhite",
          "white",
          $language.add_to_cart,
          true
        );
        handleGenericErrors({
          status: status,
          statusMessage: statusMessage,
          stock: stock,
          total_price: total_price
        });
      }
    });
    timeoutAnimation = setTimeout(function () {
      document.querySelector(".add-to-cart-message").style.animation =
        "fadeOutAnimation 0.5s linear";
    }, 5000);

    timeoutHidden = setTimeout(function () {
      document.querySelector(".add-to-cart-message").classList.add("!hidden");
      document.querySelector(".notification-bar").classList.remove("!hidden");
    }, 5500);
  },
  false
);

let increaseButton = document.querySelector(".check-increase-quantity");
increaseButton?.addEventListener("click", function () {
  addItemToChart?.classList.remove("pointer-events-none");
  let first_variation_id = 0;
  let second_variation_id = 0;
  if ($product.variation_details.length > 0) {
    let selectedFirstRadio = document.querySelector(
      '#first_variation_checkboxes input[name="first_var"]:checked'
    );
    const selectedSecondRadio = document.querySelector(
      '#second_variation_checkboxes input[name="second_var"]:checked'
    );
    first_variation_id = selectedFirstRadio ? selectedFirstRadio.value : 0;
    second_variation_id = selectedSecondRadio ? selectedSecondRadio.value : 0;
  } else {
    first_variation_id = checkVariationGroup("first_variation_group");
    second_variation_id = checkVariationGroup("second_variation_group");
  }
  document.getElementById("product-quantity").stepUp();
  let thisEl = this;
  thisEl.setAttribute("disabled", "true");
  let productId = this.dataset.id;
  let productQuantityEl = document.querySelector(
    '#product-quantity[data-id="' + productId + '"]'
  );
  const data =
    "type=check_increase_product_quantity&product_id=" +
    productId +
    "&current_quantity=" +
    productQuantityEl.value +
    "&first_variation_id=" +
    first_variation_id +
    "&second_variation_id=" +
    second_variation_id;
  const url = $urls.update_quantity;
  sendRequest("POST", url, data, function (http) {
    let result = http.response;
    if (result.status === "increased") {
      if (parseInt(productQuantityEl.value) <= parseInt(result.stock)) {
        thisEl.disabled = false;
        document.querySelector(".check-decrease-quantity").disabled = false;
        document
          .querySelector(".check-decrease-quantity")
          ?.removeAttribute("disabled", "disabled");
        document
          .querySelector(".check-decrease-quantity")
          ?.classList.remove("input-minus-passive");
      }
      if (parseInt(productQuantityEl.value) === parseInt(result.stock)) {
        document
          .querySelector(".check-increase-quantity")
          ?.classList.add("input-plus-passive");
        document
          .querySelector(".check-increase-quantity")
          ?.setAttribute("disabled", "");
      }
    } else {
      handleGenericErrors({
        status: http.status,
        statusMessage: result.status,
        message: result.message
      });
    }
  });
});

let checkDecreaseQuantity = document.querySelector(".check-decrease-quantity");
checkDecreaseQuantity?.addEventListener("click", function () {
  addItemToChart?.classList.remove("pointer-events-none");
  document.getElementById("product-quantity").stepDown();
  let thisEl = this;
  thisEl.setAttribute("disabled", "true");
  let productId = thisEl.dataset.id;
  let productQuantityEl = document.querySelector(
    '#product-quantity[data-id="' + productId + '"]'
  );
  let first_variation_id = 0;
  let second_variation_id = 0;
  if ($product.variation_details.length > 0) {
    let selectedFirstRadio = document.querySelector(
      '#first_variation_checkboxes input[name="first_var"]:checked'
    );
    const selectedSecondRadio = document.querySelector(
      '#second_variation_checkboxes input[name="second_var"]:checked'
    );
    first_variation_id = selectedFirstRadio ? selectedFirstRadio.value : -1;
    second_variation_id = selectedSecondRadio ? selectedSecondRadio.value : 0;
  } else {
    first_variation_id = checkVariationGroup("first_variation_group");
    second_variation_id = checkVariationGroup("second_variation_group");
  }
  const data =
    "type=check_decrease_product_quantity" +
    "&product_id=" +
    productId +
    "&current_quantity=" +
    productQuantityEl.value +
    "&first_variation_id=" +
    first_variation_id +
    "&second_variation_id=" +
    second_variation_id;
  const url = $urls.update_quantity;
  sendRequest("POST", url, data, function (http) {
    let result = http.response;
    if (result.status === "decreased") {
      if (parseInt(productQuantityEl.value) <= parseInt(result.stock)) {
        if (parseInt(productQuantityEl.value) !== 1) {
          thisEl.disabled = false;
        } else {
          document
            .querySelector(".check-decrease-quantity")
            .classList.add("input-minus-passive");
        }
        document
          .querySelector(".check-increase-quantity")
          ?.removeAttribute("disabled");
        document
          .querySelector(".check-increase-quantity")
          .classList.remove("input-plus-passive");
      }
    } else {
      handleGenericErrors({
        status: http.status,
        statusMessage: result.status,
        message: result.message
      });
    }
  });
});

const ongoingYesBtns = document.querySelectorAll(".cancel-ongoing-payment-yes");
ongoingYesBtns.forEach((el) => {
  el?.addEventListener("click", function () {
    const data = "recreate=yes";
    const url = $urls.cancel_ongoing_payment;
    sendRequest("POST", url, data, function (http) {
      if (
        http.getResponseHeader("content-type").includes("application/json") ===
        false
      ) {
        showInvalidModal({ message: $language.client_error_message });
        return;
      }
      let result = http.response;
      handleGenericErrors({
        status: http.status,
        statusMessage: result.status,
        message: result.message
      });
    });
  });
});

function updateProductPrice(data) {
  let price_symbol = $currency_symbol;
  let price_code = $currency_code;
  let { price_without_cent, price_cent, has_cent } = data.price;
  price_cent = has_cent ? price_cent : "";
  document.querySelector(
    ".product-price"
  ).innerHTML = `<span class="price-value">${price_symbol}${price_without_cent}</span><span class="price-cent">${price_cent}</span><span class="price-currency">${price_code}</span>`;
}

function slideToTargetImage(variantImage = $product.primary_variant_image) {
  if (variantImage != "") {
    const swiperContainer = document.querySelector(".product-gallery-main");
    if (swiperContainer && swiperContainer.swiper) {
      const swiperInstance = swiperContainer.swiper;
      const slides = Array.from(
        swiperContainer.querySelectorAll(".swiper-slide")
      );
      const targetSlideIndex = slides.findIndex((slide) => {
        return slide.querySelector(
          '[data-variant-image="' + variantImage + '"]'
        );
      });

      if (!$product.labels["out_of_stock"]["enabled"]) {
        let isStock = document
          .querySelector('[data-variant-image="' + variantImage + '"]')
          ?.getAttribute("data-out-of-stock");
        if (isStock == "0") {
          document.querySelector(".variation-tag")?.classList.remove("!hidden");
        } else {
          document.querySelector(".variation-tag")?.classList.add("!hidden");
        }
      }
      if (targetSlideIndex !== -1) {
        swiperInstance.slideTo(targetSlideIndex);
      } else {
        swiperInstance.slideTo(0);
      }
    }
  } else {
    const swiperContainer = document.querySelector(".product-gallery-main");
    const swiperInstance = swiperContainer.swiper;
    swiperInstance.slideTo(0);
  }
}

function resetFirstVariations() {
  document.querySelector(
    ".product-price"
  ).innerHTML = `<span class="price-value">${$currency_symbol}${$product.price.price_without_cent}</span><span class="price-cent">${$cent}</span><span class="price-currency">${$currency_code}</span>`;
  document.querySelector(
    `#first_variation_group`
  ).innerHTML = `<option selected value="-1"></option>
  ${$product.variations?.variation_1
    ?.map((variation) =>
      variation.stock > 0
        ? `<option value="${variation.id}">${variation.name}</option>`
        : ""
    )
    .join("")}
`;
  document.querySelector(
    `#dropdown_items_first_variation_group`
  ).innerHTML = ` <div class="dropdown-title">${
    $product.variations?.variation_1_name
  }</div>
   ${$product.variations?.variation_1
     ?.map((variation) =>
       variation.stock > 0
         ? `
              <div class="dropdown-item" data-value="${variation.id}"><label class="input-radio first-var_item">
                  <div class="input-body">
                      <div class="input-name dropdown-input">${variation.name}</div>
                  </div>
                      <input type="radio" name="first" value="${variation.id}"
                             data-label="${variation.name}" class="dropdown-input pointer-events-none">
              </label>
          </div>
    `
         : ""
     )
     .join("")}`;
  if (isMobileView) {
    if ($product.variations?.variation_1?.length > 6) {
      document
        .querySelector(".variation-effect-first")
        ?.classList.remove("!hidden");
    }
  } else {
    if ($product.variations?.variation_1?.length > 10) {
      document
        .querySelector(".variation-effect-first")
        ?.classList.remove("!hidden");
    }
  }
  dropdowsTitle();
}

function resetSecondVariations() {
  if (document.querySelector(`#second_variation_group`)) {
    document.querySelector(
      `#second_variation_group`
    ).innerHTML = `<option selected value="-1"></option>
      ${$product.variations?.variation_2
        ?.map((variation) =>
          variation.stock > 0
            ? `<option value="${variation.id}">${variation.name}</option>`
            : ""
        )
        .join("")}`;
    document.querySelector(
      `#dropdown_items_second_variation_group`
    ).innerHTML = `<div class="dropdown-title">${
      $product.variations?.variation_2_name
    }</div>
      ${$product.variations?.variation_2
        ?.map((variation) =>
          variation.stock > 0
            ? `
          <div class="dropdown-item" data-value="${variation.id}"><label class="input-radio second-var_item">
                  <div class="input-body">
                      <div class="input-name dropdown-input">${variation.name}</div>
                  </div>
                      <input type="radio" name="second" value="${variation.id}"
                             data-label="${variation.name}" class="dropdown-input pointer-events-none">
              </label>
          </div>
        `
            : ""
        )
        .join("")}`;
    if (isMobileView) {
      if ($product.variations?.variation_2?.length > 6) {
        document
          .querySelector(".variation-effect-second")
          ?.classList.remove("!hidden");
      }
    } else {
      if ($product.variations?.variation_2?.length > 10) {
        document
          .querySelector(".variation-effect-second")
          ?.classList.remove("!hidden");
      }
    }
  }
  dropdowsTitle();
}

function resetVariations() {
  resetQuantity();
  document.querySelector(
    ".product-price"
  ).innerHTML = `<span class="price-value">${$currency_symbol}${$product.price.price_without_cent}</span><span class="price-cent">${$cent}</span><span class="price-currency">${$currency_code}</span>`;
  document.querySelector(
    `#first_variation_group`
  ).innerHTML = `<option selected value="-1"></option>
  ${$product.variations?.variation_1
    ?.map((variation) =>
      variation.stock > 0
        ? `<option value="${variation.id}">${variation.name}</option>`
        : ""
    )
    .join("")}`;
  document.querySelector(
    `#dropdown_items_first_variation_group`
  ).innerHTML = ` <div class="dropdown-title">${
    $product.variations?.variation_1_name
  }</div>
  ${$product.variations?.variation_1
    ?.map((variation) =>
      variation.stock > 0
        ? `
          <div class="dropdown-item" data-value="${variation.id}"><label class="input-radio first-var_item">
                  <div class="input-body">
                      <div class="input-name dropdown-input">${variation.name}</div>
                  </div>
                      <input type="radio" name="first" value="${variation.id}"
                             data-label="${variation.name}" class="dropdown-input pointer-events-none">
              </label>
          </div>
    `
        : ""
    )
    .join("")}`;
  if (document.querySelector(`#second_variation_group`)) {
    document.querySelector(
      `#second_variation_group`
    ).innerHTML = `<option selected value="-1"></option>
      ${$product.variations?.variation_2
        ?.map((variation) =>
          variation.stock > 0
            ? `<option value="${variation.id}">${variation.name}</option>`
            : ""
        )
        .join("")}`;
    document.querySelector(
      `#dropdown_items_second_variation_group`
    ).innerHTML = `<div class="dropdown-title">${
      $product.variations?.variation_2_name
    }</div>
      ${$product.variations?.variation_2
        ?.map((variation) =>
          variation.stock > 0
            ? `
          <div class="dropdown-item" data-value="${variation.id}"><label class="input-radio second-var_item">
                  <div class="input-body">
                      <div class="input-name dropdown-input">${variation.name}</div>
                  </div>
                      <input type="radio" name="second" value="${variation.id}"
                             data-label="${variation.name}" class="dropdown-input pointer-events-none">
              </label>
          </div>
        `
            : ""
        )
        .join("")}`;
  }
  dropdowsTitle();
}

function handleFirstVariation(mainVariationId, secondVar, isDropdownVar) {
  const firstVarCheckboxes = document.querySelectorAll(
    ".first_variation_checkbox"
  );
  const secondVarCheckboxes = document.querySelectorAll(
    ".second_variation_checkbox"
  );
  firstVarCheckboxes?.forEach(function (el) {
    el.classList.add("pointer-events-none");
  });
  secondVarCheckboxes?.forEach(function (el) {
    el.classList.add("pointer-events-none");
  });
  let productId = document.querySelector("#product-quantity").dataset.id;
  document
    .querySelector(".check-increase-quantity")
    .removeAttribute("disabled");
  mainVariationId = parseInt(mainVariationId, 10);
  if (isNaN(mainVariationId)) {
    mainVariationId = -1;
  }
  document.querySelector("#first_variation_id").value = mainVariationId;
  resetQuantity();
  let secondVariationGroupEl = document.getElementById(secondVar);
  let subVariationValue;
  if (secondVariationGroupEl) {
    subVariationValue = secondVariationGroupEl.value;
  }
  if (secondVariationGroupEl !== null) {
    if (isDropdownVar) {
      secondVariationGroupEl.options[0].selected = true;
    }
    const url = $urls.check_sub_variation;
    const data =
      "type=check_available_sub_variation" +
      "&product_id=" +
      productId +
      "&main_variation_id=" +
      mainVariationId;
    document.body.classList.add("pointer-events-none");
    sendRequest("POST", url, data, function (http) {
      document.body.classList.remove("pointer-events-none");
      if (
        http.getResponseHeader("content-type").includes("application/json") ===
        false
      ) {
        showInvalidModal({ message: $language.client_error_message });
        return;
      }
      let result = http.response;
      let checkedDropdownRadio;
      let checkedValue = -1;
      if (result.status === "sub_variation_exist") {
        if (result.stock === 1) {
          document.querySelector(".check-increase-quantity").disabled = true;
          document
            .querySelector(".check-increase-quantity")
            .classList.add("input-plus-passive");
        }
        if (isDropdownVar) {
          const { sub_variations } = result;
          if (isMobileView) {
            if (sub_variations.length > 6) {
              document
                .querySelector(".variation-effect-second")
                ?.classList.remove("!hidden");
            } else {
              document
                .querySelector(".variation-effect-second")
                ?.classList.add("!hidden");
            }
          } else {
            if (sub_variations.length > 10) {
              document
                .querySelector(".variation-effect-second")
                ?.classList.remove("!hidden");
            } else {
              document
                .querySelector(".variation-effect-second")
                ?.classList.add("!hidden");
            }
          }
          /*reset variation*/
          /*document.getElementById('dropdown_items_second_variation_group').innerHTML = "";
                  document.querySelector('.sub-selected').innerHTML = "";
                  document.querySelector('.sub-selected').closest('.select').removeAttribute('data-value');*/
          if (subVariationValue != -1) {
            checkedDropdownRadio = document.querySelector(
              ".dropdown_items_second_variation_group input:checked"
            );
            const matchedItem = result["sub_variations"].find(
              (item) => item.id === parseInt(checkedDropdownRadio.value)
            );
            if (matchedItem) {
              updateProductPrice(matchedItem);
            } else {
              /* Eğer bir kombinasyonu yoksa işlem bitirlmeli ve varyasyonlar resetlenmeli */
              disableSubmitBtn();
              resetVariations();
              const firstVarClone = document.getElementById(
                "first_variation_group_clone"
              );
              const secondVarClone = document.getElementById(
                "second_variation_group_clone"
              );
              firstVarClone.querySelector(".dropdown-selected").innerHTML = "";
              firstVarClone.closest(".select").removeAttribute("data-value");
              if (secondVarClone) {
                secondVarClone.querySelector(".dropdown-selected").innerHTML =
                  "";
                secondVarClone.closest(".select").removeAttribute("data-value");
              }
              return;
            }
          } else {
            document.querySelector(
              ".product-price"
            ).innerHTML = `<span class="price-value">${$currency_symbol}${$product.price.price_without_cent}</span><span class="price-cent">${$cent}</span><span class="price-currency">${$currency_code}</span>`;
          }
          document.getElementById(
            "second_variation_group"
          ).innerHTML = `<option selected value="-1"></option>`;
          if ($product.variations?.variation_2) {
            document.getElementById(
              "dropdown_items_second_variation_group"
            ).innerHTML = `<div class="dropdown-title">${$product.variations?.variation_2_name}</div>`;
            dropdowsTitle();
          }
        } else {
          const checkedInput = document.querySelector(
            ".second_variation_checkbox input:checked"
          );
          if (checkedInput) {
            const matchedItem = result["sub_variations"].find(
              (item) => item.id === parseInt(checkedInput.value)
            );
            updateProductPrice(matchedItem);
            slideToTargetImage(matchedItem.picturefilename);
          } else {
            slideToTargetImage();
            document.querySelector(
              ".product-price"
            ).innerHTML = `<span class="price-value">${$currency_symbol}${$product.price.price_without_cent}</span><span class="price-cent">${$cent}</span><span class="price-currency">${$currency_code}</span>`;
          }
        }
        const subVarCheckboxes = document.querySelectorAll(
          ".second_variation_checkbox input"
        );
        subVarCheckboxes.forEach((input) => {
          if (input) {
            input.disabled = true;
          }
        });
        if (checkedDropdownRadio) {
          checkedValue = checkedDropdownRadio.value;
        }
        result["sub_variations"].forEach((item) => {
          manageVariations(isDropdownVar, item, "second", checkedValue);
        });
        if (isDropdownVar) {
          document.querySelector("#second_variation_group").value =
            checkedValue;
        }
        firstVarCheckboxes?.forEach(function (el) {
          el.classList.remove("pointer-events-none");
        });
        secondVarCheckboxes?.forEach(function (el) {
          el.classList.remove("pointer-events-none");
        });
      } else {
        handleGenericErrors({
          status: http.status,
          statusMessage: result.status,
          message: result.message,
          result: result
        });
      }
    });
  } else {
    const url = $urls.check_sub_variation;
    const data =
      "type=check_first_variation" +
      "&product_id=" +
      productId +
      "&main_variation_id=" +
      mainVariationId;
    sendRequest("POST", url, data, function (http) {
      if (
        http.getResponseHeader("content-type").includes("application/json") ===
        false
      ) {
        showInvalidModal({ message: $language.client_error_message });
        return;
      }
      let result = http.response;
      if (mainVariationId !== -1) {
        if (result.status === "success") {
          if (result.stock === 1) {
            document.querySelector(".check-increase-quantity").disabled = true;
            document
              .querySelector(".check-increase-quantity")
              .classList.add("input-plus-passive");
          }
          updateProductPrice(result);
          slideToTargetImage(result.variation_image);
          if (!$product.labels["out_of_stock"]["enabled"]) {
            if (result.stock <= 0) {
              document
                .querySelector(".variation-tag")
                ?.classList.remove("!hidden");
            } else {
              document
                .querySelector(".variation-tag")
                ?.classList.add("!hidden");
            }
          }
          firstVarCheckboxes?.forEach(function (el) {
            el.classList.remove("pointer-events-none");
          });
          secondVarCheckboxes?.forEach(function (el) {
            el.classList.remove("pointer-events-none");
          });
        } else {
          handleGenericErrors({
            status: http.status,
            statusMessage: result.status,
            message: result.message
          });
        }
      }
    });
  }
}

function handleSecondVariation(isDropdownVar) {
  const firstVarCheckboxes = document.querySelectorAll(
    ".first_variation_checkbox"
  );
  const secondVarCheckboxes = document.querySelectorAll(
    ".second_variation_checkbox"
  );
  firstVarCheckboxes?.forEach(function (el) {
    el.classList.add("pointer-events-none");
  });
  secondVarCheckboxes?.forEach(function (el) {
    el.classList.add("pointer-events-none");
  });
  let productId = document.querySelector("#product-quantity").dataset.id;
  resetQuantity();
  let selectedFirstRadio = document.querySelector(
    '#first_variation_checkboxes input[name="first_var"]:checked'
  );
  const selectedSecondRadio = document.querySelector(
    '#second_variation_checkboxes input[name="second_var"]:checked'
  );
  let mainVariationId;
  let subVariationId;
  if (isDropdownVar) {
    let firstVariationValue = document.querySelector(
      "#first_variation_group"
    ).value;
    mainVariationId = firstVariationValue ? firstVariationValue : -1;
    subVariationId = document.querySelector("#second_variation_group").value;
  } else {
    mainVariationId = selectedFirstRadio ? selectedFirstRadio.value : -1;
    subVariationId = selectedSecondRadio.value;
  }
  const url = $urls.check_sub_variation;
  const data =
    "type=check_second_variation" +
    "&product_id=" +
    productId +
    "&main_variation_id=" +
    mainVariationId +
    "&sub_variation_id=" +
    subVariationId;
  document.body.classList.add("pointer-events-none");
  sendRequest("POST", url, data, function (http) {
    document.body.classList.remove("pointer-events-none");
    document.querySelector("#second_variation_id").value = subVariationId;
    if (
      http.getResponseHeader("content-type").includes("application/json") ===
      false
    ) {
      showInvalidModal({ message: $language.client_error_message });
      return;
    }
    let result = http.response;
    if (result.status === "success") {
      if (result.variation_image !== null && result.price) {
        slideToTargetImage(result.variation_image);
      }
      if (result.stock === 1) {
        document.querySelector(".check-increase-quantity").disabled = true;
        document
          .querySelector(".check-increase-quantity")
          .classList.add("input-plus-passive");
      }
      if (!$product.labels["out_of_stock"]["enabled"]) {
        if (result.stock <= 0) {
          document.querySelector(".variation-tag")?.classList.remove("!hidden");
        } else {
          document.querySelector(".variation-tag")?.classList.add("!hidden");
        }
      }
      let checkedDropdownRadio;
      let checkedValue = -1;
      if (!isDropdownVar) {
        const mainVarCheckboxes = document.querySelectorAll(
          ".first_variation_checkbox input"
        );
        mainVarCheckboxes.forEach((input) => {
          if (input) {
            input.disabled = true;
          }
        });
        const checkedInput = document.querySelector(
          ".first_variation_checkbox input:checked"
        );
        if (checkedInput) {
          const matchedItem = result["main_variations"].find(
            (item) => item.id === parseInt(checkedInput.value)
          );
          updateProductPrice(matchedItem);
          slideToTargetImage(matchedItem.variation_image);
        } else {
          slideToTargetImage();
          document.querySelector(
            ".product-price"
          ).innerHTML = `<span class="price-value">${$currency_symbol}${$product.price.price_without_cent}</span><span class="price-cent">${$cent}</span><span class="price-currency">${$currency_code}</span>`;
        }
      } else {
        const { main_variations } = result;
        if (isMobileView) {
          if (main_variations.length > 6) {
            document
              .querySelector(".variation-effect-first")
              ?.classList.remove("!hidden");
          } else {
            document
              .querySelector(".variation-effect-first")
              ?.classList.add("!hidden");
          }
        } else {
          if (main_variations.length > 10) {
            document
              .querySelector(".variation-effect-first")
              ?.classList.remove("!hidden");
          } else {
            document
              .querySelector(".variation-effect-first")
              ?.classList.add("!hidden");
          }
        }
        if (mainVariationId != -1) {
          checkedDropdownRadio = document.querySelector(
            ".dropdown_items_first_variation_group input:checked"
          );
          const matchedItem = result["main_variations"].find(
            (item) => item.id === parseInt(checkedDropdownRadio.value)
          );
          if (matchedItem) {
            updateProductPrice(matchedItem);
          } else {
            /* Eğer bir kombinasyonu yoksa işlem bitirlmeli ve varyasyonlar resetlenmeli */
            disableSubmitBtn();
            resetVariations();
            const firstVarClone = document.getElementById(
              "first_variation_group_clone"
            );
            const secondVarClone = document.getElementById(
              "second_variation_group_clone"
            );
            firstVarClone.querySelector(".dropdown-selected").innerHTML = "";
            firstVarClone.closest(".select").removeAttribute("data-value");
            if (secondVarClone) {
              secondVarClone.querySelector(".dropdown-selected").innerHTML = "";
              secondVarClone.closest(".select").removeAttribute("data-value");
            }
            return;
          }
        } else {
          document.querySelector(
            ".product-price"
          ).innerHTML = `<span class="price-value">${$currency_symbol}${$product.price.price_without_cent}</span><span class="price-cent">${$cent}</span><span class="price-currency">${$currency_code}</span>`;
        }
        document.getElementById(
          "first_variation_group"
        ).innerHTML = `<option selected value="-1"></option>`;
        document.getElementById(
          "dropdown_items_first_variation_group"
        ).innerHTML = `<div class="dropdown-title">${$product.variations?.variation_1_name}</div>`;
        dropdowsTitle();
      }
      if (checkedDropdownRadio) {
        checkedValue = checkedDropdownRadio.value;
      }
      result["main_variations"].forEach((item) => {
        manageVariations(isDropdownVar, item, "first", checkedValue);
      });
      if (isDropdownVar) {
        document.querySelector("#first_variation_group").value = checkedValue;
      }
      secondVarCheckboxes?.forEach(function (el) {
        el.classList.remove("pointer-events-none");
      });
      firstVarCheckboxes?.forEach(function (el) {
        el.classList.remove("pointer-events-none");
      });
    } else {
      handleGenericErrors({
        status: http.status,
        statusMessage: result.status,
        message: result.message
      });
    }
  });
}

let isPageLoaded = false;
document?.addEventListener("DOMContentLoaded", function () {
  //Variation scroll to effect change
  const listElements = document.querySelectorAll(".select-list");
  const overlayElements = document.querySelectorAll(".variation-effect");
  if (listElements && overlayElements) {
    listElements.forEach((listEl) => {
      listEl.addEventListener("scroll", () => {
        const atBottom =
          listEl.scrollHeight - listEl.scrollTop <= listEl.clientHeight;
        overlayElements.forEach((overlayEl) => {
          if (atBottom) {
            overlayEl.classList.add("hidden");
          } else {
            overlayEl.classList.remove("hidden");
          }
        });
      });
    });
  }
  if ($product.stock > 0) {
    document
      .getElementById("add-item-to-chart")
      ?.classList.remove("pointer-events-none");
    document
      .getElementById("buy-now-button")
      ?.classList.remove("pointer-events-none");
  }
  const noStockVariations = document.querySelectorAll(
    ".variation_checkbox input[disabled]"
  );
  if ($product.stock === 0) {
    document.querySelector(".product-no-stock").classList.remove("!hidden");
  }
  const variationCheckboxes = document.querySelectorAll(".variation_checkbox");
  variationCheckboxes.forEach((checkbox) => {
    checkbox.classList.remove("pointer-events-none");
  });
  if (!$product.labels["out_of_stock"]["enabled"]) {
    let productGallery = document.querySelector(".product-gallery-main");
    productGallery.swiper.on("slideChange", function (elem) {
      let slideIndex = elem.activeIndex;
      let slide = elem.slides[slideIndex];
      let isStock = slide
        .querySelector("img")
        .getAttribute("data-out-of-stock");
      if (isStock == "0") {
        document.querySelector(".variation-tag")?.classList.remove("!hidden");
      } else {
        document.querySelector(".variation-tag")?.classList.add("!hidden");
      }
    });
  }

  slideToTargetImage();
  const dropdowns = document.querySelectorAll(".select--product-page");
  const firstVariationClone = document.getElementById(
    "first_variation_group_clone"
  );
  const secondVariationClone = document.getElementById(
    "second_variation_group_clone"
  );
  dropdowns?.forEach((dropdown) => {
    dropdown.classList.add("pointer-events-none");
  });
  window.addEventListener("load", function () {
    isPageLoaded = true;
    firstVariationClone?.classList.remove("pointer-events-none");
    secondVariationClone?.classList.remove("pointer-events-none");
    dropdowns?.forEach((dropdown) => {
      dropdown.classList.remove("pointer-events-none");
    });
  });
  const firstVar = document.querySelector("#first_variation_group");
  if (firstVar) {
    firstVar?.addEventListener("change", function (e) {
      let mainVariationId = parseInt(e.target.value);
      const toggleBtn = document.querySelector(
        ".dropdown-btn-toggle_first_variation_group"
      );
      if (
        document
          .querySelector(".dropdown-btn-toggle_first_variation_group")
          .classList.contains("input-error")
      ) {
        const isValid = Number(firstVar.value) !== -1;
        if (isValid) {
          toggleBtn.classList.remove("input-error");
        } else {
          toggleBtn.classList.add("input-error");
        }
      }
      if (firstVar.value == -1) {
        const firstVarClone = document.getElementById(
          "first_variation_group_clone"
        );
        const secondVarClone = document.getElementById(
          "second_variation_group_clone"
        );
        firstVarClone.querySelector(".dropdown-selected").innerHTML = "";
        resetVariations();
        if (secondVarClone) {
          secondVarClone.querySelector(".dropdown-selected").innerHTML = "";
          secondVarClone.closest(".select").removeAttribute("data-value");
          /* shouldn't work in mobile screens */
          if (!isMobileView) {
            triggerChangeEvent("second");
          }
        }
        if (!isMobileView) {
          triggerChangeEvent("first");
        }
        return;
      }
      handleFirstVariation(mainVariationId, "second_variation_group", true);
    });
  }

  const firstVarCheckboxes = document.querySelectorAll(
    ".first_variation_checkbox"
  );
  if (firstVarCheckboxes) {
    let previouslyChecked = null;
    firstVarCheckboxes.forEach((el) => {
      el.querySelector('input[type="checkbox"]').addEventListener(
        "change",
        function (e) {
          const clickedCheckbox = e.target;

          if (clickedCheckbox.checked) {
            if (previouslyChecked && previouslyChecked !== clickedCheckbox) {
              previouslyChecked.checked = false;
            }
            previouslyChecked = clickedCheckbox;
          } else {
            const disableFirstVars = document.querySelectorAll(
              ".second_variation_checkbox input[disabled]"
            );
            disableFirstVars.forEach((el) => {
              el.removeAttribute("disabled");
            });
            noStockVariations?.forEach((input) => {
              input.disabled = true;
            });
            previouslyChecked = null;
            slideToTargetImage();
            document.querySelector(
              ".product-price"
            ).innerHTML = `<span class="price-value">${$currency_symbol}${$product.price.price_without_cent}</span><span class="price-cent">${$cent}</span><span class="price-currency">${$currency_code}</span>`;
            return;
          }
          let mainVariationId = parseInt(e.target.value);
          if (mainVariationId === 0 || isNaN(mainVariationId)) {
            return;
          }
          handleFirstVariation(
            mainVariationId,
            "second_variation_checkboxes",
            false
          );
        }
      );
    });
  }

  const secondVarCheckboxes = document.querySelectorAll(
    ".second_variation_checkbox"
  );
  if (secondVarCheckboxes) {
    let previouslyChecked = null;
    secondVarCheckboxes.forEach((el) => {
      el.addEventListener("change", function (e) {
        const clickedCheckbox = e.target;

        if (clickedCheckbox.checked) {
          if (previouslyChecked && previouslyChecked !== clickedCheckbox) {
            previouslyChecked.checked = false;
          }
          previouslyChecked = clickedCheckbox;
        } else {
          const disableFirstVars = document.querySelectorAll(
            ".first_variation_checkbox input[disabled]"
          );
          disableFirstVars.forEach((el) => {
            el.removeAttribute("disabled");
          });
          noStockVariations?.forEach((input) => {
            input.disabled = true;
          });
          previouslyChecked = null;
          slideToTargetImage();
          document.querySelector(
            ".product-price"
          ).innerHTML = `<span class="price-value">${$currency_symbol}${$product.price.price_without_cent}</span><span class="price-cent">${$cent}</span><span class="price-currency">${$currency_code}</span>`;
          return;
        }
        handleSecondVariation(false);
      });
    });
  }
  const secondVar = document.querySelector("#second_variation_group");
  if (secondVar) {
    secondVar?.addEventListener("change", function (e) {
      const toggleBtn = document.querySelector(
        ".dropdown-btn-toggle_second_variation_group"
      );
      if (
        document
          .querySelector(".dropdown-btn-toggle_second_variation_group")
          .classList.contains("input-error")
      ) {
        const isValid = Number(secondVar.value) !== -1;
        if (isValid) {
          toggleBtn.classList.remove("input-error");
        } else {
          toggleBtn.classList.add("input-error");
        }
      }
      if (
        Number(document.querySelector("#second_variation_group").value) === -1
      ) {
        const firstVarClone = document.getElementById(
          "first_variation_group_clone"
        );
        const secondVarClone = document.getElementById(
          "second_variation_group_clone"
        );
        firstVarClone.querySelector(".dropdown-selected").textContent = "";
        firstVarClone.closest(".select").removeAttribute("data-value");
        resetVariations();
        if (secondVarClone) {
          secondVarClone.querySelector(".dropdown-selected").textContent = "";
          if (!isMobileView) {
            triggerChangeEvent("second");
          }
        }
        if (!isMobileView) {
          triggerChangeEvent("first");
        }
        return;
      }
      handleSecondVariation(true);
    });
  }

  if ($error_message) {
    let butonHtmlError;
    if (isMobileView) {
      butonHtmlError = `<button class="btn btn-primary w-full" type="button"
                                        data-bs-dismiss="offcanvas"><span>${$language.close}</span></button>`;
    } else {
      butonHtmlError = `<button class="btn btn-primary w-full" type="button"
                                        data-bs-dismiss="modal"><span>${$language.close}</span></button>`;
    }
    showInvalidModal({
      message: $error_message.description,
      button: butonHtmlError
    });
  }
});

if ($product.multi_option_selectable === 1) {
  let optionCheckboxes = document.querySelectorAll(
    ".shopier-template--product-detail__options input"
  );
  const handleCheckboxClick = (e) => {
    optionCheckboxes?.forEach((singleCheckbox) => {
      if (singleCheckbox !== e.target) {
        singleCheckbox.checked = false;
        singleCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
      }
      if (e.target.checked) {
        let optionCanvas = bootstrap.Offcanvas.getInstance(
          document.querySelector("#optionsSheet")
        );
        optionCanvas?.hide();
      }
    });
  };

  optionCheckboxes?.forEach((singleCheckbox) => {
    singleCheckbox?.addEventListener("click", handleCheckboxClick);
  });
}

if (
  $product.variations?.variation_1_name &&
  $product.variations?.variation_2_name
) {
  function dropdowsTitle() {
    const dropdownTitles = document.querySelectorAll(".dropdown-title");
    dropdownTitles.forEach((title) => {
      const titleText = title.textContent;
      if (titleText.length <= 11) {
        title.remove();
      }
    });
  }
  dropdowsTitle();
}
