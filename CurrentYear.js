<script>
        // This script will run when the DOM content is fully loaded
        document.addEventListener('DOMContentLoaded', (event) => {
            // Getting the current year
            const currentYear = new Date().getFullYear();

            // Setting the current year in the HTML element with the ID 'currentYear'
            document.getElementById('currentYear').textContent = currentYear;
        });
</script>