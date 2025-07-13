function arraymove(arr, fromIndex, toIndex) {
	console.log(fromIndex)
	if (fromIndex > -1) {
		var element = arr[fromIndex];
		arr.splice(fromIndex, 1);
		arr.splice(toIndex, 0, element);
	}
}

fetch("/php/get_downloads.php")
	.then((data) => data.json())
	.then((files) => {
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

		files.forEach((file) => {
			const mainLinkElement = document.createElement("a");
			mainLinkElement.classList = "fancy-link";
			mainLinkElement.href = "/minecraft/downloads/" + file;
			mainLinkElement.style.padding = "4px";
			mainLinkElement.innerHTML = `
				<p style="margin-top: auto; margin-bottom: auto; padding-left: 4px;">
					🔗 ${file}
				</p>
			`;

			let world = files.indexOf(file) <= 2 ? 1 : 2;

			const linkContainer = document.getElementById(world);
			linkContainer.appendChild(mainLinkElement);
		});
	})
	.catch((error) => {
		console.error("PHP request failed with error: ", error);
	});
