/* ELASTIC SEARCH*/
    let hasMobile = window.matchMedia("(max-width: 1023px)").matches;

    let elasticForm, elasticInput, elasticButton, elasticResults;

    if (hasMobile) {
        elasticForm = document.getElementById('shopier-es--form-mobile');
        elasticInput = document.getElementById('shopier-es--input-mobile');
        elasticButton = document.getElementById('shopier-es--button-mobile');
        elasticResults = document.getElementById('shopier-es--body-mobile');
    } else {
        elasticForm = document.getElementById('shopier-es--form');
        elasticInput = document.getElementById('shopier-es--input');
        elasticButton = document.getElementById('shopier-es--button');
        elasticResults = document.getElementById('shopier-es--body');
    }
    const elasticBackdrop = document.querySelector('.search-backdrop');


    let isElasticOpen = false;

    function setElastic(isShow) {
        setTimeout(function () {
            if (isShow) {
                elasticBackdrop.classList.add('has-results');
                elasticResults.classList.add('show');
                isElasticOpen = true;
                document.addEventListener('click', handleOutsideClick);
            } else {
                elasticBackdrop?.classList.remove('has-results');
                isElasticOpen = false;
                document.removeEventListener('click', handleOutsideClick);

            }
        }, 300)
    }

    function handleOutsideClick(event) {
        if (!isElasticOpen) return;
        if (!elasticForm.contains(event.target)) {
            setElastic(false);
        }
    }

    /* set purple border to active item with arrow keys */
   /* elasticInput?.addEventListener('keydown', (e) => {
        if (
            e.key === 'ArrowDown' ||
            (e.key === 'ArrowUp' && elasticResults.classList.contains('show'))
        ) {
            e.preventDefault();
            const items = elasticResults.querySelectorAll('.dropdown-item');
            const indexOfActive = [...items].findIndex((item) => item.classList.contains('active'));
            [...items].forEach((item) => item.classList.remove('active'));
            if (e.key === 'ArrowDown') {
                if (indexOfActive === -1 || indexOfActive + 1 > items.length - 1) {
                    items[0].classList.add('active');
                } else {
                    items[indexOfActive + 1].classList.add('active');
                }
            } else if (e.key === 'ArrowUp') {
                if (indexOfActive === -1 || indexOfActive - 1 < 0) {
                    items[items.length - 1].classList.add('active');
                } else {
                    items[indexOfActive - 1].classList.add('active');
                }
            }
        }
        if (e.key === 'Enter' && elasticResults.classList.contains('show')) {
            const activeItem = elasticResults.querySelector('.dropdown-item.active');
            if (activeItem) {
                e.preventDefault();
                activeItem?.click();
            } else {
                setElastic(false);
            }

        }
    });*/

    function sendRequest(method, url, data, callback) {
        let http = new XMLHttpRequest();
        http.open(method, url);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.setRequestHeader("X-CSRF-TOKEN", document.querySelector('meta[name="csrf-token"]').content);
        http.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        http.responseType = 'json';
        http.onreadystatechange = function () {
            if (http.readyState === 4) {
                if (http.status === 200) {
                    callback(http);
                } else {
                    /* assets/js/custom_scripts */
                    handleHttpError(http.status);
                }
            }
        };
        http.send(data);
    }


    function showInvalidModal(args) {
        const {
            title = '',
            message = '',
            modalClass = '',
            contentClass= '',
            contentInnerHtml = '',
            icon = '<div class="bg-miscallenous"></div>',
            iconClass = '',
            buttonClass = '',
            button = '',
        } = args
        let toastSection = document.querySelector(".toast");
        let modal;
        toastSection.querySelector('.toast-title').innerHTML = title;
        toastSection.querySelector('.toast-text').innerHTML = message;
        toastSection.querySelector('.toast-btn').classList.remove('!hidden');
        if (title === ''){
            toastSection.querySelector('.toast-title').classList.add('hidden');
        }
        let iconContainer = toastSection.querySelector('.icon-container');
        iconContainer.innerHTML = icon;
        if (iconClass){
            iconContainer.classList.add(iconClass);
        }
        if (modalClass){
            toastSection.classList.add(modalClass)
        }
        if (contentClass){
            toastSection.querySelector('.toast-text').classList.add(contentClass);
        }
        if (contentInnerHtml){
            toastSection.querySelector('.toast-text').innerHTML = contentInnerHtml;
        }
        if (button !== ''){
            toastSection.querySelector('.toast-btn').innerHTML = button;
        }
        if (buttonClass !== ''){
            toastSection.querySelector('.toast-btn').classList.add(buttonClass);
        }
        if (isMobileView) {
            modal = new bootstrap.Offcanvas(document.getElementById('invalid-canvas'));
        } else {
            modal = new bootstrap.Modal(document.getElementById('invalid-modal'));
        }
        modal.show();
    }


    let previousScreenSize = window.matchMedia("(max-width: 1023px)").matches;
    let  isMobileView = previousScreenSize;
    window.addEventListener('resize', function () {
        const currentScreenSize = window.matchMedia("(max-width: 1023px)").matches;
        if (previousScreenSize !== currentScreenSize) {
            previousScreenSize = currentScreenSize;
            isMobileView = currentScreenSize;
            /* footer */
            if (typeof renderTrackOrderModals === 'function') renderTrackOrderModals();
            if (typeof renderPrivacyModals === 'function') renderPrivacyModals();
            if (typeof createTrackOrderModals === 'function') createTrackOrderModals();
            if (typeof createModalOrCanvas === 'function') createModalOrCanvas();
            if (typeof createSecureModals === 'function') createSecureModals();
            if (typeof initializeSecureModals === 'function') initializeSecureModals();
            if (typeof checkAndSetShippingDropdown === 'function') checkAndSetShippingDropdown();
            if (typeof checkAndSetPaymentDropdown === 'function') checkAndSetPaymentDropdown();
            if (typeof checkAndSetVarDropdown === 'function') checkAndSetVarDropdown();
            if (typeof renderPhoneCodes === 'function'){
                renderPhoneCodes('phone_codes')
                renderPhoneCodes('ba-phone_codes')
            }
            const renderEvent = new Event('render', {bubbles: false});
            document.dispatchEvent(renderEvent);
        }
    });
    if (typeof renderTrackOrderModals === 'function') renderTrackOrderModals();
    if (typeof createModalOrCanvas === 'function') createModalOrCanvas();
    if (typeof renderPrivacyModals === 'function') renderPrivacyModals();

    function triggerAppNotification(args) {
        showInvalidModal({message: args.message});
    }


    function UpdatedBadgesMargin(selector, mMargin, mMargin2, dMargin, dMargin2) {
        document.querySelectorAll(selector).forEach(card => {
            const header = card.querySelector('.product-card-header');
            const badges = card.querySelector('.product-card-badges');
            if (hasMobile) {
                if (badges && badges.classList.contains('!hidden')) {
                    header.style.marginBottom = mMargin;
                } else {
                    header.style.marginBottom = mMargin2;
                }
            } else {
                if (badges && badges.classList.contains('!hidden')) {
                    header.style.marginBottom = dMargin;
                } else {
                    header.style.marginBottom = dMargin2;
                }
            }
        });
    }

    document.getElementById('trackOrderHead')?.addEventListener('click', function () {
        if (isMobileView) {
            let orderTrackingSheet = new window.bootstrap.Offcanvas(document.getElementById('orderTrackingSheet'))
            orderTrackingSheet.show()
        } else {
            let orderTrackingModal = new window.bootstrap.Modal(document.getElementById('orderTrackingModal'))
            orderTrackingModal.show()
        }
    });


        const offcanvasElements = document.querySelectorAll('.offcanvas.action-sheet.offcanvas-bottom');
        offcanvasElements.forEach((offcanvasElement) => {
            const closeButton = offcanvasElement.querySelector("[data-bs-dismiss='offcanvas']");
            const header = offcanvasElement.querySelector('.offcanvas-header');
            const body = offcanvasElement.querySelector('.offcanvas-body');
            let startY = 0;
            let endY = 0;
            const isInSwipeZone = (element, touchY) => {
                const rect = element.getBoundingClientRect();
                return touchY >= rect.top && touchY <= rect.top + 50;
            };
            offcanvasElement.addEventListener('touchstart', (event) => {
                const touchY = event.touches[0].clientY;
                if (header.contains(event.target) || isInSwipeZone(body, touchY)) {
                    startY = touchY;
                }
            }, { passive: true });
            offcanvasElement.addEventListener('touchmove', (event) => {
                const touchY = event.touches[0].clientY;
                if (startY) {
                    endY = touchY;
                }
            }, { passive: true });
            offcanvasElement.addEventListener('touchend', () => {
                const swipeDistance = endY - startY;
                if (swipeDistance > 50) {
                    closeButton.click();
                }
                startY = 0;
                endY = 0;
            });
        });
     function createLottieAnimationBtnLoad(selector, path,btnLoaderColor,btnSpanTextValue,btnProcessing=false) {
         const loadMore={nm:"loading_6",mn:"",layers:[{ty:4,nm:"Shape Layer 2",mn:"",sr:1,st:0,op:300,ip:0,hd:!1,cl:"",ln:"",ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[30.000000000000004,30.000000000000004,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[150.00000000000003,150.00000000000003,0],ix:2},r:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[0],t:0},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[360],t:60}],ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,cl:"",ln:"",hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 1",ix:1,cix:2,np:3,it:[{ty:"el",bm:0,cl:"",ln:"",hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[300,300],ix:2}},{ty:"st",bm:0,cl:"",ln:"",hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:50,ix:5},d:[],c:{a:0,k:[.4039,0,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"tm",bm:0,cl:"",ln:"",hd:!1,mn:"ADBE Vector Filter - Trim",nm:"Trim Paths 1",ix:2,e:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[1],t:0},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[100],t:50}],ix:2},o:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[0],t:0},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[3],t:60}],ix:3},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0],t:10},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[99],t:60}],ix:1},m:1}],ind:1},{ty:4,nm:"Shape Layer 1",mn:"",sr:1,st:0,op:300,ip:0,hd:!1,cl:"",ln:"",ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[30.000000000000004,30.000000000000004,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[150.00000000000003,150.00000000000003,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:30,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,cl:"",ln:"",hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 1",ix:1,cix:2,np:3,it:[{ty:"el",bm:0,cl:"",ln:"",hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[300,300],ix:2}},{ty:"st",bm:0,cl:"",ln:"",hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:50,ix:5},d:[],c:{a:0,k:[.6275,.6275,.6275],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:2}],ddd:0,h:300,w:300,meta:{a:"",k:"",d:"",g:"@lottiefiles/toolkit-js 0.22.1",tc:"#000000"},v:"5.8.1",fr:30,op:60,ip:0,assets:[]};
         const loadingBtnPurple={nm:"Main Scene",ddd:0,h:200,w:400,meta:{g:"@lottiefiles/creator 1.42.2"},layers:[{ty:4,nm:"Shape Layer 2",sr:1,st:0,op:300,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[40,40,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[200,100],ix:2},r:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[0],t:0},{s:[360],t:60}],ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 1",ix:1,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[300,300],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:50,ix:5},c:{a:0,k:[.4039,0,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"tm",bm:0,hd:!1,mn:"ADBE Vector Filter - Trim",nm:"Trim Paths 1",ix:2,e:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[1],t:0},{s:[100],t:50}],ix:2},o:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[0],t:0},{s:[3],t:60}],ix:3},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0],t:10},{s:[99],t:60}],ix:1},m:1}],ind:1},{ty:4,nm:"Shape Layer 1",sr:1,st:0,op:300,ip:0,hd:!0,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[40,40,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[200,100],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:30,ix:11}},shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 1",ix:1,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[300,300],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:50,ix:5},c:{a:0,k:[.4039,0,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:2}],v:"5.7.0",fr:30,op:60,ip:0,assets:[]};
         const loadingBtnWhite={nm:"Main Scene",ddd:0,h:200,w:400,meta:{g:"@lottiefiles/creator 1.42.2"},layers:[{ty:4,nm:"Shape Layer 2",sr:1,st:0,op:300,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[40,40,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[200,100],ix:2},r:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[0],t:0},{s:[360],t:60}],ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 1",ix:1,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[300,300],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:50,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"tm",bm:0,hd:!1,mn:"ADBE Vector Filter - Trim",nm:"Trim Paths 1",ix:2,e:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[1],t:0},{s:[100],t:50}],ix:2},o:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[0],t:0},{s:[3],t:60}],ix:3},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0],t:10},{s:[99],t:60}],ix:1},m:1}],ind:1},{ty:4,nm:"Shape Layer 1",sr:1,st:0,op:300,ip:0,hd:!0,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[40,40,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[200,100],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:30,ix:11}},shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 1",ix:1,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[300,300],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:50,ix:5},c:{a:0,k:[.4039,0,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:2}],v:"5.7.0",fr:30,op:60,ip:0,assets:[]};

         const animationList={
             loadMore,
             loadingBtnPurple,
             loadingBtnWhite,
         }

         const btnSelector = document.querySelector(selector)
        const btnSpanText = btnSelector.querySelector('span')
        if (!btnProcessing){
            btnSpanText.textContent=""
            btnSelector.classList.add('btn-loading',`btn-loading-${btnLoaderColor}`)
            const animation = lottie.loadAnimation({
                container: btnSpanText,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationList[path]
            });
            animation.play();
        }else{
            setTimeout(()=>{
                btnSpanText.textContent=btnSpanTextValue
                btnSelector.classList.remove('btn-loading',`btn-loading-${btnLoaderColor}`)
            },1000)
        }

    }
