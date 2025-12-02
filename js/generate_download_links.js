function arraymove(arr, fromIndex, toIndex) {
	console.log(fromIndex)
	if (fromIndex > -1) {
		var element = arr[fromIndex];
		arr.splice(fromIndex, 1);
		arr.splice(toIndex, 0, element);
	}
}

async function loadDownloads() {
	try {
		var response = await fetch("/php/get_downloads.php");
		var files = await response.json()

		latest_download = files[0]
		files.splice(0, 1)

		files = files.sort((a, b) => {
			let dateA = a.match(/([A-Za-z]+ \d{1,2} \d{4})/);
			dateA = new Date(dateA ? dateA[0] : "Jan 1 2000");
			let dateB = b.match(/([A-Za-z]+ \d{1,2} \d{4})/);
			dateB = new Date(dateB ? dateB[0] : "Jan 1 2000");
			return dateA - dateB;
		});

		files = files.reverse();

		// Reorder some files which do not follow the Month Day Year format
		arraymove(files, files.indexOf("Final World (JE).zip"), 0);
		arraymove(files, files.indexOf("Final World.zip"), 1);
		arraymove(files, files.indexOf("June 12 2021.zip"), 2);
		arraymove(files, files.indexOf("April 2023.zip"), 12);

		console.log("Downloads fetched & ordered:\n\n" + files);

		document.getElementById("latest-link").href = "/minecraft/latest_download/" + latest_download;
		document.getElementById("latest-text").innerHTML = `
			<b>↓ Latest Download</b><br>
			<span style="color: var(--fg-color);">
				Taken on ${latest_download.split('.').slice(0, -1).join('.')} at 9:00 AM<br>
			</span>
			<span style="color: var(--lightgray);">
				Java Edition
			</span>
		`;

		files.forEach((file) => {
			const mainLinkElement = document.createElement("a");
			mainLinkElement.className = "glowing fancy-link";
			mainLinkElement.href = "/minecraft/downloads/" + file;
			mainLinkElement.style.padding = "4px";
			mainLinkElement.innerHTML = `
				<p style="margin-top: auto; margin-bottom: auto; padding-left: 4px;">
					↓ ${file}
				</p>
			`;

			let world = files.indexOf(file) <= 2 ? 1 : 2;

			const linkContainer = document.getElementById(world);
			linkContainer.appendChild(mainLinkElement);
		});
	} catch (error) {
		console.error("PHP request failed with error: ", error);
	}
}
