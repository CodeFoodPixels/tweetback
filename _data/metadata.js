let data = {
	username: "CodeFoodPixels", // No leading @ here
	homeLabel: "Luke Bonaccorsi",
	homeUrl: "https://lukeb.co.uk/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
