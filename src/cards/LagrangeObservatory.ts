
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";

export class LagrangeObservatory implements IProjectCard {
    public cardType: CardType = CardType.AUTOMATED;
    public cost: number = 9;
    public tags: Array<Tags> = [Tags.SCIENCE, Tags.SPACE];
    public name: string = "Lagrange Observatory";
    public text: string = "Draw 1 card.";
    public description: string = "In a stationary orbit far from the planet, enabling very precise measurements.";
    public play(player: Player, game: Game): Promise<void> {
        game.dealer.getCards(1).forEach((card: IProjectCard) => player.cardsInHand.push(card));
        player.victoryPoints++;
        return Promise.resolve();
    }
}
