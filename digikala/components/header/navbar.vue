<template>
  <div class="container">
    <div class="d-flex firstRow">
        <div class="logo-searchBar d-flex">
            <img src="https://www.digikala.com/statics/img/svg/logo.svg" alt="" class="logo" width="115px" height="30px">
            <div class="searchBar d-flex">
                <svg style="width: 24px; height: 24px; fill: #9e9fb1;"><path fill-rule="evenodd" d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" clip-rule="evenodd"></path></svg>
                <span>جستجو</span>
            </div>
        </div>
        <div class="account-shoppingCart d-flex">
            <div class="account d-flex">
                <svg style="width: 24px; height: 24px; fill: #3f4064;"><path fill-rule="evenodd" d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z" clip-rule="evenodd"></path></svg>
                <span>ورود | ثبت‌نام</span>
            </div>
            <span class="borderLine"></span>
            <svg class="shoppingCart" style="width: 24px; height: 24px; fill: #3f4064;"><path fill-rule="evenodd" d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z" clip-rule="evenodd"></path></svg>
        </div>
    </div>
    <div class="d-flex secondRow">
        <div class="navigationBar d-flex">
            <div class="categories d-flex">
                <svg style="width: 20px; height: 20px; fill: #3f4064;"><path fill-rule="evenodd" d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z" clip-rule="evenodd"></path></svg>
                <span>دسته‌بندی کالاها</span>
            </div>
            <div class="navigations d-flex">
                <div class="navigation d-flex">
                    <svg style="width: 18px; height: 18px; fill: #9e9fb1;"><path fill-rule="evenodd" d="M18 4a2 2 0 00-2-2h-3a2 2 0 00-2 2v1.535a4.007 4.007 0 00-1.874 2.467A5.108 5.108 0 009 8l-.217.005A5 5 0 004 13H3a1 1 0 00-.99 1.141l1 7A1 1 0 004 22h16a1 1 0 00.99-.859l1-7A1 1 0 0021 13h-1V9l-.007-.232a4 4 0 00-1.992-3.232L18 4zM4.867 20l-.714-5h15.694l-.714 5H4.867zM16 7h-3a2 2 0 00-1.924 1.45 5.003 5.003 0 012.919 4.318L14 13h4V9a2 2 0 00-1.85-1.995L16 7zm-9.995 5.824A3 3 0 0112 13H6l.005-.176zM16 4h-3v1h3V4zm-1 14v-2H9v2h6z" clip-rule="evenodd"></path></svg>
                    <span>سوپرمارکت</span>
                </div>
                <div class="navigation d-flex">
                    <svg style="width: 18px; height: 18px; fill: #9e9fb1;"><path fill-rule="evenodd" d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z" clip-rule="evenodd"></path></svg>
                    <span>پرفروش‌ترین‌ها</span>
                </div>
                <div class="navigation d-flex">
                    <svg style="width: 18px; height: 18px; fill: #9e9fb1;"><path fill-rule="evenodd" d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z" clip-rule="evenodd"></path></svg>
                    <span>تخفیف‌ها و پیشنهادها</span>
                </div>
                <div class="navigation d-flex">
                    <svg style="width: 18px; height: 18px; fill: #9e9fb1;"><path fill-rule="evenodd" d="M15.112 2.234c.687.231 1.153.525 1.895 1.171l.536.474.109.09.142.104.653.42c.837.54 1.244.9 1.663 1.495.381.542.579 1 .794 1.841l.226.941.053.185.049.142.285.719c.36.914.483 1.457.483 2.184 0 .728-.124 1.27-.483 2.184l-.246.615-.08.22-.06.211-.227.941c-.215.842-.413 1.3-.795 1.843-.416.59-.822.95-1.646 1.483l-.67.431-.14.104-.176.147-.471.417c-.742.646-1.208.94-1.898 1.172-.688.23-1.206.272-2.224.199l-.687-.052-.197-.006-.086.001-.212.01-.586.047c-1.018.073-1.537.03-2.23-.201-.686-.231-1.152-.524-1.893-1.17l-.594-.522-.144-.111-.103-.072-.619-.395c-.821-.532-1.229-.894-1.643-1.483-.417-.593-.614-1.085-.855-2.085l-.146-.621-.061-.225-.06-.179-.285-.719C2.123 13.27 2 12.729 2 12c0-.727.124-1.27.483-2.184l.285-.717.082-.258.039-.147.146-.621.118-.46c.195-.707.39-1.131.737-1.624.414-.59.82-.95 1.643-1.483l.552-.352.153-.104.16-.123.124-.105.47-.417c.743-.646 1.209-.94 1.897-1.171.69-.232 1.209-.274 2.227-.2l.7.052.228.005.275-.013.564-.044c1.02-.074 1.539-.031 2.229.2zm-1.931 1.784l-.89.065c-.105.006-.2.008-.291.008l-.275-.007-.156-.009-.563-.044-.385-.024c-.514-.024-.767.012-1.094.122l-.108.039c-.35.132-.62.313-1.138.767l-.55.486-.155.125-.142.107-.23.158-.72.462c-.517.343-.733.545-.958.866-.23.326-.347.596-.51 1.247l-.193.815-.05.19-.05.17-.094.271-.345.87C4.061 11.287 4 11.594 4 12l.002.12c.012.35.082.65.282 1.18l.37.934.07.21.074.257.219.914c.162.65.28.92.51 1.247.247.352.485.564 1.121.973l.559.356c.118.077.204.138.296.207l.073.056.241.2.464.411c.569.5.839.67 1.241.805.404.135.694.159 1.484.1l.306-.025.555-.034.133-.002c.09 0 .186.003.291.008l.166.01.536.043c.79.059 1.08.035 1.478-.098.407-.138.678-.308 1.247-.807l.387-.344.212-.182.181-.142.186-.133.108-.073.721-.462c.518-.342.735-.546.96-.866.25-.357.367-.644.554-1.431l.091-.391c.032-.138.059-.245.084-.34l.075-.26.094-.273.345-.869c.223-.587.284-.894.284-1.299 0-.405-.061-.712-.284-1.299l-.37-.934-.095-.293-.075-.274-.149-.631-.098-.39c-.109-.402-.203-.64-.34-.865l-.115-.175c-.226-.32-.441-.523-.96-.866l-.624-.4a7.664 7.664 0 01-.255-.17l-.212-.157-.155-.126-.697-.613c-.42-.357-.669-.516-.977-.634l-.218-.074c-.322-.098-.603-.12-1.195-.081zM16 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.8-8.1l1.6 1.2-6 8-1.6-1.2 6-8zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clip-rule="evenodd"></path></svg>
                    <span>شگفت‌انگیزها</span>
                </div>
            </div>
            <div class="navigations d-flex">
                <div class="navigation d-flex">
                    <span>سوالی دارید؟</span>
                </div>
                <div class="navigation d-flex">
                    <span>در دیجی‌کالا بفروشید!</span>
                </div>
            </div>
        </div>
        <div class="location d-flex">
            <svg style="width: 20px; height: 20px; fill: #3f4064;"><path fill-rule="evenodd" d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zm8.47 8.794c.784-.627 1.569-1.34 2.298-2.124C16.8 14.101 18 11.827 18 9.611 18 6.521 15.33 4 12 4S6 6.522 6 9.611c0 2.215 1.2 4.49 3.232 6.67A21.536 21.536 0 0012 18.769c.148-.111.305-.233.47-.364zM12 14a4.001 4.001 0 010-8 4.001 4.001 0 010 8zm0-2a2.001 2.001 0 000-4 2.001 2.001 0 000 4z" clip-rule="evenodd"></path></svg>
            <span>لطفا شهر خود را انتخاب کنید</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.container {
    box-shadow: 0 1px 0 rgb(0 0 0 / 14%), 0 2px 0 rgb(0 0 0 / 5%);
    position: fixed;
    width: 100%;
}
.d-flex {
    display: flex;
    flex-direction: row-reverse;
}
.firstRow {
    padding: 12px 16px;
    justify-content: space-between;
    align-items: center;
}
.searchBar {
    margin-right: 20px;
    padding: 0 16px;
    background-color: #f1f2f4;
    border-radius: 8px;
    align-items: center;
    height: 44px;
    flex-basis: 68%;
}
.logo-searchBar {
    flex-basis: 60%;
    align-items: center;
}
.searchBar span {
    color: #767790;
    font-size: 14px;
    margin-right: 16px;
    width: 100%;
    direction: rtl;
}
.account {
    padding: 0 16px;
    border: 1px solid #e0e0e6;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 800;
    align-items: center;
    color: #080a38;
    gap: 8px;
    height: 42px;
}
.account-shoppingCart {
    align-items: center;
}
.borderLine {
    margin: 0 12px;
    background-color: #e0e0e6;
    width: 1px;
    height: 24px;
}
.shoppingCart {
    margin: 0 8px;
}
.secondRow {
    padding: 0 16px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}
.secondRow svg path {
    transform: scale(.8);
}
.categories {
    margin-left: 20px;
    font-size: 14px;
    font-weight: 700;
    color: #3f4064;
    height: 40px;
    align-items: center;
    gap: 2px;
    position: relative;
}
.navigations {
    align-items: center;
    position: relative;
}
.navigation {
    padding: 0 12px;
    gap: 4px;
    font-size: 14px;
    color: #5a5c7a;
    height: 40px;
    align-items: center;
    position: relative;
}
.navigation span {
    direction: rtl;
}
.navigations::before {
    content: "";
    width: 1px;
    background-color: #e0e0e6;
    height: 16px;
    position: absolute;
}
.location {
    font-size: 14px;
    color: #3f4064;
    gap: 8px;
    position: relative;
}
.navigation::after, .categories::after {
    content: "";
    position: absolute;
    width: 0;
    background-color: #ef394e;
    transition: all .2s ease;
    bottom: 0;
    height: 2px;
    left: 0;
    border-radius: 8px 8px 0 0;
}
.navigation:hover::after, .categories:hover::after {
    width: 100%;
}
.location::after {
    content: "لطفا شهر خود را انتخاب کنید";
    max-width: 320px;
    border: 1px solid #23254e;
    background-color: #3f4064;
    color: white;
    border-radius: 4px;
    padding: 12px;
    position: absolute;
    top: 30px;
    left: 0;
    display: none;
}
.location:hover:after {
    display: block;
}
</style>