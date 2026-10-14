for(const content of contentData){
    const articleContainer = document.querySelector(".article-container");
    articleContainer.insertAdjacentHTML('beforeend', `
        <div class="content">
            <h5>${content.title}</h5>
            <p>${content.content}</p>
            <div class="button-group">
                <svg fill="#000000" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="Star">
                        <path  d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"/>
                    </g>
                </svg>
                <svg width="18px" height="18px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/></svg>
                <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 7.5L8.5 7.5M11 4L8.5 7.49542L11 11M14.5 2.4987C14.5 3.60198 13.604 4.49739 12.5 4.49739C11.396 4.49739 10.5 3.60198 10.5 2.4987C10.5 1.39542 11.396 0.5 12.5 0.5C13.604 0.5 14.5 1.39542 14.5 2.4987ZM14.5 12.4922C14.5 13.5954 13.604 14.4909 12.5 14.4909C11.396 14.4909 10.5 13.5954 10.5 12.4922C10.5 11.3889 11.396 10.4935 12.5 10.4935C13.604 10.4935 14.5 11.3889 14.5 12.4922ZM4.5 7.49543C4.5 8.59871 3.604 9.49413 2.5 9.49413C1.396 9.49413 0.5 8.59871 0.5 7.49543C0.5 6.39215 1.396 5.49673 2.5 5.49673C3.604 5.49673 4.5 6.39215 4.5 7.49543Z" stroke="#000000" stroke-linecap="square"/>
                </svg>
            </div>
        </div>
    `);
}


for(const announcement of announcementData){
    const announcementList = document.querySelector(".announcement");
    announcementList.insertAdjacentHTML('beforeend', `
        <div>
            <h5>${announcement.title}</h5>
            <p>${announcement.content}</p>
        </div>
    `);
}

for(const user of trendingData){
    const trendingRepositories = document.querySelector(".trending-repositories");
    trendingRepositories.insertAdjacentHTML('beforeend', `
        <div class="user">
            <img class="profile-icon" src="${user.imagePath}" alt="profile-image">
            <div class="user-info">
                <h6>${user.username}</h6>
                <p>${user.trendingProject}</p>
            </div>
        </div>
    `);
}
