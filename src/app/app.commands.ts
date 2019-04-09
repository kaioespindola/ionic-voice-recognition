export class Commands {

    private static commands = [
        'Pedir um guincho',
        'Quero pedir um guincho',
        'Quero trocar meus dados',
        'Abrir configurações'
      ];

    constructor() {}

    public static getCommands() {
        return this.commands;
    }

}