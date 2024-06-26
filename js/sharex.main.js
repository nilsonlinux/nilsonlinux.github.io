$(document).ready(function() {
    $(".sharex-download").on("mouseenter click", function() {
        $(this).off("mouseenter click");

        GetLatestReleaseInfo();
    });
});

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/nilsonlinux/Nilsonlinux/releases/latest").done(function(release) {
        UpdateDownloadButton(release, ".deb", $(".ncode-linux"));
        UpdateDownloadButton(release, ".zip", $(".ncode-offline-install"));
    });

    $.getJSON("https://api.github.com/repos/ShareX/DevBuilds/releases/latest").done(function(release) {
        UpdateDownloadButton(release, ".exe", $(".sharex-dev-build"));
    });
}

function UpdateDownloadButton(release, assetExtension, element) {
    let asset = release.assets.find(asset => asset.name.endsWith(assetExtension));
    let releaseInfo = "Versão: " + release.tag_name.substring(1) +
        "\nTamanho do arquivo: " + (asset.size / 1024 / 1024).toFixed(2) + " MB" +
        "\nData da versão: " + new Date(asset.updated_at).toLocaleDateString("en-CA") +
        "\nTotal Download: " + asset.download_count.toLocaleString();

    element.attr("href", asset.browser_download_url);
    element.attr("title", releaseInfo);
    element.tooltip({
        trigger: "hover"
    });
}
