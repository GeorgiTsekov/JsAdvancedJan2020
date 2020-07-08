class Computer {

    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory - requiredSpace < 0) {
            throw new Error('There is not enough space on the hard drive');
        }

        const installedProgram = { name, requiredSpace };

        this.installedPrograms.push(installedProgram);

        this.hddMemory -= requiredSpace;

        return installedProgram;
    }

    uninstallAProgram(name) {
        let programIndex = this.installedPrograms.findIndex(x => x.name === name);

        if (programIndex === - 1) {
            throw new Error('Control panel is not responding');
        }

        let currentRequiredSpace = this.installedPrograms[programIndex].requiredSpace;
        this.hddMemory += currentRequiredSpace;
        this.installedPrograms.splice(programIndex, 1);

        return this.installedPrograms;
    }

    openAProgram(name) {
        if (!this.installedPrograms.find(x => x.name === name)) {
            throw new Error(`The ${name} is not recognized`);
        }

        if (this.taskManager.find(x => x.name === name)) {
            throw new Error(`The ${name} is already open`);
        }

        let programRequiredSpace = this.installedPrograms.find(x => x.name === name).requiredSpace;
        let ramUsage = (programRequiredSpace / this.ramMemory) * 1.5;

        let cpuUsage = ((programRequiredSpace / this.cpuGHz) / 500) * 1.5;

        if ((ramUsage + this.ramTotalUsage) >= 100) {
            throw new Error(`${name} caused out of memory exception`)
        }

        if ((cpuUsage + this.cPuTotalUsage) >= 100) {
            throw new Error(`${name} caused out of cpu exception`)
        }

        let cpuUsages = { name, ramUsage, cpuUsage };
        this.taskManager.push(cpuUsages);

        return cpuUsages;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        } else {
            return this.taskManager
            .map(t => `Name - ${t.name} | Usage - CPU: ${t.cpuUsage.toFixed(0)}%, RAM: ${t.ramUsage.toFixed(0)}%`)
            .join('\n')
        }
    }

    get ramTotalUsage() {
        return this.taskManager.reduce((acc, curr) => acc + curr.ramUsage, 0);
    }

    get cPuTotalUsage() {
        return this.taskManager.reduce((acc, curr) => acc + curr.cpuUsage, 0);
    }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());


