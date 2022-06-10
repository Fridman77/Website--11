const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header_upload');

let button = document.querySelector('.button_upload');
let input = document.querySelector('input');

let file;

button.onclick = () => {
 input.click();
};

// when browse
input.addEventListener('change', function() { 
	file = this.files[0]; 
	dragArea.classList.add('active');
	displayFile();
});

// when file is inside the drag area
dragArea.addEventListener('dragover',(event) => {
	event.preventDefault();
	dragText.textContent = 'Release to Upload';
	dragArea.classList.add('active');
});

// then file leaves the drag area

dragArea.addEventListener('dragleave',(event) => {
	dragText.textContent = 'Drag & Drop';
	dragArea.classList.remove('active');
});

//when the file is dropped in the arrea

dragArea.addEventListener('drop',(event) => {
	event.preventDefault();

	file = event.dataTransfer.files[0];	
	displayFile();
});

function displayFile() {
	let fileType = file.type;
	let validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf', 'application/doc', 'application/docx'];
	
	if(validExtensions.includes(fileType)) {
		let fileReader = new FileReader();

		fileReader.onload = () => {
			let fileURL = fileReader.result;
		};
		fileReader.readAsDataURL(file);
	} else {
		alert('This file is not accepted.');
		dragArea.classList.remove('active');
	}

}