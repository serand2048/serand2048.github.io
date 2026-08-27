(() => {
    const konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a"
    ];

    let input = [];

    document.addEventListener("keydown", (event) => {
        const key = event.key.length === 1
            ? event.key.toLowerCase()
            : event.key;

        input.push(key);

        // Оставляем только последние 10 нажатий
        if (input.length > konamiCode.length) {
            input.shift();
        }

        if (input.join(",") === konamiCode.join(",")) {
            openAdminPanel();
            input = [];
        }
    });

    function openAdminPanel() {
        if (document.getElementById("fake-admin-panel")) return;

        const panel = document.createElement("div");

        panel.id = "fake-admin-panel";

        panel.innerHTML = `
            <div class="admin-window">
                <div class="admin-title">
                    ADMIN PANEL
                    <button id="admin-close">×</button>
                </div>

                <div class="admin-content">
                    <button data-sound="sounds/pridurok.mp3">
                        Удалить папку Windows
                    </button>

                    <button data-sound="sounds/screwyou.mp3">
                        Удалить сайт
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(panel);

        panel.querySelectorAll("[data-sound]").forEach(button => {
            button.addEventListener("click", () => {
                const sound = new Audio(button.dataset.sound);

                sound.currentTime = 0;
                sound.play();
            });
        });

        panel.querySelector("#admin-close").addEventListener("click", () => {
            panel.remove();
        });
    }
})();