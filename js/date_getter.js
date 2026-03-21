async function getLatestCommitDate(owner, repo, branch) {
	const url = `https://api.github.com/repos/${owner}/${repo}/commits/${branch}`;

	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`Request failed: ${res.status}`);
	}

	const data = await res.json();

	const date = data.commit.committer.date;
	return date;
}

function formatDate(isoString) {
	const date = new Date(isoString);

	const parts = date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}).replace(",", "");

	return parts;
}

(async () => {
	try {
		const date = await getLatestCommitDate("hw2007", "hw2007.net", "main");
		console.log("Latest commit date:", date);
		const date_element = document.getElementById("date");
		date_element.innerText = formatDate(date)
	} catch (err) {
		console.error(err);
	}
})();