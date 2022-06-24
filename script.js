async function fetchData() {
    let result = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
        .then(res => res.json())
        .then(json => {
            let data = '';
            for (let i = 0; i < json.length; i++) {
                console.log(json[i].name);
                data = data + `
                <div class="card">
                    <div class="image">
                        <img href="#" src="${json[i].image_link}">
                    </div>
                    <div class="content">
                        <h3>${json[i].name}</h3>
                        <table>
                            <tr>
                                <td>Nama Latin</td>
                                <td>:</td>
                                <td>${json[i].latin_name}</td>
                            </tr>
                            <tr>
                                <td>Tipe</td>
                                <td>:</td>
                                <td>${json[i].animal_type}</td>
                            </tr>
                            <tr>
                                <td>Makanan</td>
                                <td>:</td>
                                <td>${json[i].diet}</td>
                            </tr>
                            <tr>
                                <td>Habitat</td>
                                <td>:</td>
                                <td>${json[i].habitat}</td>
                            </tr>
                            <tr>
                                <td>Wilayah</td>
                                <td>:</td>
                                <td>${json[i].geo_range}</td>
                            </tr>
                        </table>
                    </div>
                </div>            
                `;
            }
            document.getElementById("containerCard").innerHTML = data;
        })
};
fetchData();


function parallax_height() {
    let scroll_top = $(this).scrollTop();
    let sample_section_top = $(".sample-section").offset().top;
    let header_height = $(".sample-header-section").outerHeight();
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function() {
    parallax_height();
});
$(window).resize(function() {
    parallax_height();
});


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    let header_height = ($(".sample-header-section").outerHeight());
    header_height /= 2.7;
    if (document.body.scrollTop > header_height || document.documentElement.scrollTop > header_height) {
        document.getElementById("judul").style.visibility = "hidden";
        document.getElementById("judul").style.opacity = "0";
        // document.getElementById("judulDesk").style.visibility = "hidden";
        // document.getElementById("judulDesk").style.opacity = "0";
    } else {
        document.getElementById("judul").style.visibility = "visible";
        document.getElementById("judul").style.opacity = "1";
        // document.getElementById("judulDesk").style.visibility = "visible";
        // document.getElementById("judulDesk").style.opacity = "1";
    }
}