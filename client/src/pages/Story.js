import React, { Component } from "react";
import BattleText from "../components/battleText";
import Moving from "../components/movement";
import Inventory from "../components/inventory";
import ReturnToStory from "../components/ReturnToStory";
import BattleStats from "../components/BattleStats";
import Run from "../components/Run"
import MoveText from "../components/moveText"
import createEnemies from '../utils/createEnemies.js';
import Story from "./Story.json";



function handleButton3() {
    console.log("clicked");

}

class Battle extends Component {

    state = {
        heroHP: 100,
        heroAttack: 20,
        heroMaxHP: 100,
        battleDialogue: "An enemy wants to fight! What would you like to do? ",
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
        battleRender: false,
        score: '',
        battleCounter: 0,
        enemyList: createEnemies(),
        storyID: 0
    }

    handleButtonInventory = () => {
        console.log("clicked");
        this.setState({
            invenShow: !this.state.invenShow
        })

    }

    handleButtonFight = () => {
        console.log("clicked");
        let newEnemyList = this.state.enemyList

        newEnemyList[this.state.battleCounter].enemyHP = newEnemyList[this.state.battleCounter].enemyHP - this.state.heroAttack

        this.setState({
            enemyList: newEnemyList,
            faded: false
        }, function () {
            if (this.state.enemyList[this.state.battleCounter].enemyHP <= 0 && this.state.currentlyInBattle === true) {
                console.log('defeated enimes!!!')

                this.endBattle()
            } else {
                this.setState({
                    heroHP: this.state.heroHP - this.state.enemyList[this.state.battleCounter].enemyAttack,
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
            battleDialogue: "You have defeated the enemy! You gained 100 points",
            score: this.state.score + 100,

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
            this.setState({
                battleRender: false
            })
        } else {
            this.setState({
                runShow: false
            })
        }
    }

    handleReturnStory = () => {

        this.setState({
            battleCounter: this.state.battleCounter + 1,
            currentlyInBattle: true,
            endShow: false
        }, function () {
            if (this.state.battleCounter == 3) {
                this.setState({
                    battleRender: false
                })
            }
        })

        // }
    }

    choiceBtn1 = (num) => {

        if (num == "to battle") {
            this.setState({
                battleRender: true
            })
        } else {

            this.setState({
                storyID: num
            })
        }
    }



    render() {

        console.log('this is our state', this.state)

        return (
            <div>
                {this.state.battleRender ? (
                    <div>
                        <Moving />
                        {this.state.enemyList[this.state.battleCounter] ? (<BattleStats heroHP={this.state.heroHP} heroMaxHP={this.state.heroMaxHP} enemy={this.state.enemyList[this.state.battleCounter]} />) : ''}

                        <BattleText handleButtonFight={this.handleButtonFight} handleButtonInventory={this.handleButtonInventory} handleButton3={this.handleButton3} handleButtonRun={this.handleButtonRun} battleDialogue={this.state.battleDialogue} faded={this.state.faded} />
                        <Inventory handleButtonInventory={this.handleButtonInventory} inventory={this.state.inventory} invenShow={this.state.invenShow} />
                        <ReturnToStory handleReturnStory={this.handleReturnStory} endShow={this.state.endShow} />
                        <Run handleRunContinue={this.handleRunContinue} runShow={this.state.runShow} runDia={this.state.runDia} runClass={this.state.runClass} />
                    </div>
                ) : (
                        <div>
                            <Moving />
                            <MoveText choiceBtn1={this.choiceBtn1} story={Story[this.state.storyID]} />
                        </div>
                    )}
            </div>
        )
    }
}

export default Battle