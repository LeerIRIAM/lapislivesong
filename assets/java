// 出演者データ
const artists = [
    {
        name: "アーティスト1",
        image: "images/artist1.jpg",  // パスを修正
        description: "アーティスト1はロックバンドで、エネルギッシュなステージパフォーマンスが特徴です。"
    },
    {
        name: "アーティスト2",
        image: "images/artist2.jpg",  // パスを修正
        description: "アーティスト2はソロシンガーで、美しいバラードが人気です。"
    },
    {
        name: "アーティスト3",
        image: "images/artist3.jpg",  // パスを修正
        description: "アーティスト3は電子音楽のプロデューサーで、独特のサウンドを作り上げています。"
    }
];

// タイムテーブルデータ
const timetable = [
    { time: "12:00", artist: "アーティスト1" },
    { time: "13:30", artist: "アーティスト2" },
    { time: "15:00", artist: "アーティスト3" }
];

// 出演者セクションにアーティストを追加
const artistContainer = document.getElementById('artist-container');

artists.forEach(artist => {
    const artistDiv = document.createElement('div');
    artistDiv.classList.add('artist');

    const artistImage = document.createElement('img');
    artistImage.src = artist.image;
    artistImage.alt = artist.name;

    const artistName = document.createElement('h3');
    artistName.textContent = artist.name;

    const artistDescription = document.createElement('p');
    artistDescription.textContent = artist.description;

    artistDiv.appendChild(artistImage);
    artistDiv.appendChild(artistName);
    artistDiv.appendChild(artistDescription);

    artistContainer.appendChild(artistDiv);
});

// タイムテーブルにデータを追加
const timetableList = document.getElementById('timetable-list');

timetable.forEach(slot => {
    const listItem = document.createElement('li');
    listItem.textContent = `${slot.time} - ${slot.artist}`;
    timetableList.appendChild(listItem);
});
