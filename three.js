document.addEventListener('DOMContentLoaded', function () {
    var markerRoot = document.getElementById('markerRoot');
    var addCubeButton = document.getElementById('addCubeButton');
    var crosshair = document.getElementById('crosshair');
    var scene = document.querySelector('a-scene');

    addCubeButton.addEventListener('click', function () {
        var cube = document.createElement('a-box');
        cube.setAttribute('color', '#00ff00');
        cube.setAttribute('depth', 0.2);
        cube.setAttribute('height', 0.2);
        cube.setAttribute('width', 0.2);
        cube.classList.add('clickable');

        var camera = document.querySelector('a-entity[camera]');
        var cameraPosition = camera.getAttribute('position');
        var cameraRotation = camera.getAttribute('rotation');

        var position = {
            x: cameraPosition.x + Math.sin(cameraRotation.y * (Math.PI / 180)) * 1,
            y: cameraPosition.y,
            z: cameraPosition.z + Math.cos(cameraRotation.y * (Math.PI / 180)) * 1
        };

        cube.setAttribute('position', position);
        markerRoot.appendChild(cube);
    });

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('clickable')) {
            moveCube(event.target);
        }
    });

    function moveCube(cube) {
        cube.setAttribute('color', '#ff0000');
        var newPosition = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
            z: (Math.random() - 0.5) * 2
        };
        cube.setAttribute('position', newPosition);
    }
});
