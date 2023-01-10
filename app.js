//Welcome to app.js!

const imageDescriptions = [
    'A forest in wintertime...',
    'A lake surrounded by trees and mountains...',
    'A frog sitting by a water lily...',
    'An oil painting of orchids and apples...',
    'A futuristic city amidst a forest...',
    'A small town in a valley...',
    'A meadow that vanishes into the horizon...',
    'Tall palm trees on a tropical island...',
    'A rugged coastline with crystal blue water...',
    'An arid desert overflowing with cacti...',
    'A tropical rainforest with lush, emerald-green trees...',
    'A rocky desert with towering peaks in the distance...',
    'A nice blue suburban duplex with ample space...',
    'A dark horse marching through a tundra...',
    'Two persian cats sitting on a window sill...',
    'An apartment complex with footpaths and bushes...',
    'Purple flowers growing in a pot outdoors...',
    'A tall, grey suburban house with a trimmed lawn...',
    'Sweet mangoes hanging from a tree...',
    'A evergreen pine forest in the summertime...'
];

const displayImages = () => {
    for (let i = 0; i <= 19; i++) {
        const container = document.createElement('div');
        container.classList.add('container');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image-div');

        const image = document.createElement('img');
        image.classList.add('gallery-img');
        image.src = `images/ai-img${i}.png`;
        image.alt = `${imageDescriptions[i]}`;

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info-div');

        const infoParagraph = document.createElement('p');
        infoParagraph.classList.add('info');
        infoParagraph.innerHTML = `${imageDescriptions[i]}`;

        const download = document.createElement('button');
        download.classList.add('download');
        download.innerHTML = 'Download';

        const downloadLink = document.createElement('a');
        downloadLink.href = `images/ai-img${i}.png`;
        downloadLink.download = `${imageDescriptions[i]}`;
        downloadLink.appendChild(download);

        const gallery = document.querySelector('#gallery');

        gallery.appendChild(container);
        container.appendChild(imageDiv);
        container.appendChild(infoDiv);
        imageDiv.appendChild(image);
        infoDiv.appendChild(infoParagraph);
        infoDiv.appendChild(downloadLink);
    }
};

displayImages();
