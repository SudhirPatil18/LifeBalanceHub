document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the display of additional content
    function toggleContent(sectionId) {
        const section = document.getElementById(sectionId);
        const content = section.querySelector('.additional-content');

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    }

    // Event listeners for each section
    document.getElementById('medication').addEventListener('click', function () {
        toggleContent('medication');
    });

    document.getElementById('wellness').addEventListener('click', function () {
        toggleContent('wellness');
    });

    document.getElementById('exercise').addEventListener('click', function () {
        toggleContent('exercise');
    });

    document.getElementById('lifestyle').addEventListener('click', function () {
        toggleContent('lifestyle');
    });

    document.getElementById('motivators').addEventListener('click', function () {
        toggleContent('motivators');
    });
});
