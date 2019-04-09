export class Commands {

    private static commands = [
        'pedir um guincho',
        'quero pedir um guincho',
        'quero trocar meus dados',
        'abrir configurações'
      ];

    constructor() {}

    public static getCommands() {
        return this.commands;
    }

}