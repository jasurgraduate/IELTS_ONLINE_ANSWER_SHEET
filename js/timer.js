let interval;
        let timerRunning = false;
        let remainingTime = 3600; // 1 hour in seconds

        const timerDisplay = document.getElementById('timer');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');

        function startTimer() {
            interval = setInterval(updateTimer, 1000);
            timerRunning = true;
            startBtn.disabled = true;
            stopBtn.disabled = false;
            resetBtn.disabled = true;
        }

        function stopTimer() {
            clearInterval(interval);
            timerRunning = false;
            startBtn.disabled = false;
            stopBtn.disabled = true;
            resetBtn.disabled = false;
        }

        function resetTimer() {
            stopTimer();
            remainingTime = 3600;
            timerDisplay.textContent = '01:00:00';
        }

        function updateTimer() {
            remainingTime--;
            if (remainingTime < 0) {
                stopTimer();
                timerDisplay.textContent = '00:00:00';
            } else {
                const formattedTime = formatTime(remainingTime);
                timerDisplay.textContent = formattedTime;
            }
        }

        function formatTime(time) {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;
            return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        }

        function padZero(number) {
            return (number < 10) ? `0${number}` : number;
        }

        startBtn.addEventListener('click', () => {
            if (!timerRunning) {
                startTimer();
            }
        });

        stopBtn.addEventListener('click', () => {
            if (timerRunning) {
                stopTimer();
            }
        });

        resetBtn.addEventListener('click', () => {
            resetTimer();
        });

       