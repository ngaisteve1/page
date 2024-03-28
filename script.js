$(document).ready(function() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        $('#myTable').DataTable({
            data: data,
            columns: [
                { data: 'name' },
                { data: 'age' },
                { data: 'city' }
            ]
        });
    });
});
