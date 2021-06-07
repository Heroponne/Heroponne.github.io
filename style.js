var ctx = document.getElementById('skillsChart');
var options = {
    scale: {
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 0,
            suggestedMax: 5
        }
    }
};

var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Java', 'Php', 'Javascript', 'Ruby', 'Python', 'SQL', ' HTML/CSS'],
        datasets: [{
            data: [2, 3, 2, 2, 1, 3, 3],
            backgroundColor: 'rgba(29, 224, 195, 0.1)',
            borderColor: 'rgba(29, 224, 195, 0.8)',
            label: 'Niveau de maîtrise des langages'
        }]
    },
    options: options
});
