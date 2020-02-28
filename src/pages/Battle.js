import React, { Component } from "react";
import BattleText from "../components/battleText";
import Moving from "../components/movement";
import Inventory from "../components/inventory";
import ReturnToStory from "../components/ReturnToStory";
import BattleStats from "../components/BattleStats";
import Run from "../components/Run"



function handleButton3() {
    console.log("clicked");

}





class Battle extends Component {

    state = {
        heroHP: 100,
        heroAttack: 20,
        heroMaxHP: 100,
        enemyHP: 50,
        enemyAttack: 10,
        enemyMaxHP: 50,
        battleDialogue: "You encountered a rogue knight! What would you like to do? ",
        currentlyInBattle: true,
        faded: true,
        inventory: [
            "potion", "golden apple", "steak", "other things"
        ],
        invenShow: false,
        endShow: false,
        runShow: false,
        random: Math.floor((Math.random() * 4) + 1),
        runDia: "",
        runSuccess: false,
        runClass: "",

    }

    handleButtonInventory = () => {
        console.log("clicked");
        this.setState({
            invenShow: !this.state.invenShow
        })

    }

    handleButtonFight = () => {
        console.log("clicked");

        this.setState({
            enemyHP: this.state.enemyHP - this.state.heroAttack,
            faded: false
        }, function () {
            if (this.state.enemyHP <= 0 && this.state.currentlyInBattle === true) {
                console.log('defeated enimes!!!')

                this.endBattle()
            } else {
                this.setState({
                    heroHP: this.state.heroHP - this.state.enemyAttack,
                    // faded: true,

                })
            }
            var self = this
            setTimeout(function () {
                if (self.state.currentlyInBattle) {
                    self.setState({ faded: true, battleDialogue: `You attacked! You dealt ${self.state.heroAttack} damage \n Enemey deal you ${self.state.enemyAttack}` })
                }

            }, 100)
        })

    }

    endBattle = () => {
        this.setState({
            battleDialogue: "You have defeated the enemy! You found __gold and gained __experience",
            currentlyInBattle: false,
            endShow: true

        })

    }
    handleButtonRun = () => {
        console.log(this.state.random);

        if (this.state.random === 1) {
            this.setState({
                runDia: `You could not get away and took ${this.state.enemyAttack} damage!`,
                heroHP: this.state.heroHP - this.state.enemyAttack,
                runSuccess: false
            })

        } else {
            this.setState({
                runDia: "You have successfully run away",
                runSuccess: true
            })

        }

        this.setState({
            runShow: true
        })
    }

    handleRunContinue = () => {
        if (this.state.runSuccess === true) {
            window.location.href = "movement"
        } else {
            this.setState({
                runShow: false
            })
        }
    }

    handleReturnStory = () => {
        window.location.href = "movement"
    }

    render() {



        return (
            <>
                <Moving />
                <BattleStats enemyHP={this.state.enemyHP} heroHP={this.state.heroHP} heroMaxHP={this.state.heroMaxHP} enemyMaxHP={this.state.enemyMaxHP} />
                <BattleText handleButtonFight={this.handleButtonFight} handleButtonInventory={this.handleButtonInventory} handleButton3={this.handleButton3} handleButtonRun={this.handleButtonRun} battleDialogue={this.state.battleDialogue} faded={this.state.faded} />
                <Inventory handleButtonInventory={this.handleButtonInventory} inventory={this.state.inventory} invenShow={this.state.invenShow} />
                <ReturnToStory handleReturnStory={this.handleReturnStory} endShow={this.state.endShow} />
                <Run handleRunContinue={this.handleRunContinue} runShow={this.state.runShow} runDia={this.state.runDia} runClass={this.state.runClass} />
            </>
        )
    }
}

export default Battle