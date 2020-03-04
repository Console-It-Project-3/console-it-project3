import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import BattleText from "../components/battleText";
import Moving from "../components/movement";
import Inventory from "../components/inventory";
import ReturnToStory from "../components/ReturnToStory";
import BattleStats from "../components/BattleStats";
import Run from "../components/Run"
import MoveText from "../components/moveText"
import createEnemies from '../utils/createEnemies.js';
import Story from "./Story.json";
import "./Story.css"
import Boss from "./boss.json"



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
        storyID: 0,
        storyCounter: 0,
        gameover: false,
        bossRender: false,

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

        if (this.state.battleRender) {
            newEnemyList[this.state.battleCounter].enemyHP = newEnemyList[this.state.battleCounter].enemyHP - this.state.heroAttack
            this.setState({
                enemyList: newEnemyList,
                faded: false
            }, function () {
                if (this.state.enemyList[this.state.battleCounter].enemyHP <= 0 && this.state.currentlyInBattle === true) {


                    this.endBattle()
                }
                if (this.state.heroHP <= 0) {
                    this.setState({
                        gameover: true
                    })
                } else {
                    this.setState({
                        heroHP: this.state.heroHP - this.state.enemyList[this.state.battleCounter].enemyAttack,
                        // faded: true,

                    })
                }
                var self = this
                setTimeout(function () {
                    if (self.state.currentlyInBattle) {
                        self.setState({ faded: true, battleDialogue: `You attacked! You dealt ${self.state.heroAttack} damage \n Enemey dealt you ${self.state.enemyList[self.state.battleCounter].enemyAttack}` })


                    }

                }, 100)
            })

        } else if (this.state.bossRender) {
            console.log('WE HIT ELSE IF!!! boss render!!!')
            Boss.enemyHP = Boss.enemyHP - this.state.heroAttack
            this.setState({
                enemyList: newEnemyList,
                faded: false
            }, function () {
                if (Boss.enemyHP <= 0 && this.state.currentlyInBattle === true) {


                    this.endBattle()
                } else if (this.state.heroHP <= 0) {
                    this.setState({
                        gameover: true
                    })
                } else {
                    this.setState({
                        heroHP: this.state.heroHP - Boss.enemyAttack,
                        // faded: true,

                    })
                }
                var self = this
                setTimeout(function () {
                    if (self.state.currentlyInBattle) {
                        self.setState({ faded: true, battleDialogue: `You attacked! You dealt ${self.state.heroAttack} damage \n Enemey dealt you ${Boss.enemyAttack}` })


                    }

                }, 100)
            })
        }

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
                runDia: `You could not get away and took 15 damage!`,
                heroHP: this.state.heroHP - 15,
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
                battleRender: false,
                runShow: false,
                bossRender: false,
            })
        } else {
            this.setState({
                runShow: false
            })
        }
    }

    handlebuttonQuit = () => {
        console.log("clicking");

        window.location.href = "home"
    }

    handleReturnStory = () => {

        this.setState({
            battleCounter: this.state.battleCounter + 1,
            currentlyInBattle: true,
            endShow: false,
            bossRender: false
        }, function () {
            if (this.state.battleCounter === 3) {
                this.setState({
                    battleRender: false,
                    bossRender: false
                })
            }
        })

        // }
    }

    choiceBtn = (num) => {

        if (num === "to battle") {
            this.setState({
                battleRender: true,
                storyCounter: this.state.storyCounter + 1,
                storyID: 0,
                battleCounter: 0,
                enemyList: createEnemies(),
                heroHP: 100
            })
        } else if (num === "boss battle") {
            this.setState({
                bossRender: true,
                heroHP: 100,
                storyCounter: this.state.storyCounter + 1,
                storyID: 0,
            })

        } else if (num === "high scores") {
            this.props.history.push('/highscore')
        } else if (num === "character select") {
            this.props.history.push('/character')
        } else {

            this.setState({
                storyID: num
            })
            console.log("global story state", this.state.storyID);

        }
    }


    handleGameOver = () => {
        window.location.href = "highscore"

    }

    render() {
        console.log('THIS IS THE STATE in story ***************', this.state)

        return (
            <div>
                {this.state.battleRender ? (
                    <div>
                        <Moving />
                        {this.state.enemyList[this.state.battleCounter] ? (<BattleStats heroIndex={this.props.heroIndex} heroHP={this.state.heroHP} heroMaxHP={this.state.heroMaxHP} enemy={this.state.enemyList[this.state.battleCounter]} />) : ''}

                        <BattleText handleButtonFight={this.handleButtonFight} handleButtonInventory={this.handleButtonInventory} handleButtonQuit={this.handleButtonQuit} handleButtonRun={this.handleButtonRun} battleDialogue={this.state.battleDialogue} faded={this.state.faded} />
                        <Inventory handleButtonInventory={this.handleButtonInventory} inventory={this.state.inventory} invenShow={this.state.invenShow} />
                        <ReturnToStory handleReturnStory={this.handleReturnStory} endShow={this.state.endShow} />
                        <Run handleRunContinue={this.handleRunContinue} runShow={this.state.runShow} runDia={this.state.runDia} runClass={this.state.runClass} />
                    </div>
                ) : !this.state.bossRender ? (
                    <div>
                        {/* <Moving /> */}
                        <MoveText heroIndex={this.props.heroIndex} choiceBtn={this.choiceBtn} story={Story[this.state.storyCounter][this.state.storyID]} />
                    </div>
                ) : ('')}

                {this.state.bossRender ? (

                    <div>
                        <Moving />
                        <BattleStats heroIndex={this.props.heroIndex} heroHP={this.state.heroHP} heroMaxHP={this.state.heroMaxHP} enemy={Boss} />
                        <BattleText handleButtonFight={this.handleButtonFight} handleButtonInventory={this.handleButtonInventory} handleButtonQuit={this.handleButtonQuit} handleButtonRun={this.handleButtonRun} battleDialogue={this.state.battleDialogue} faded={this.state.faded} />
                        <Inventory handleButtonInventory={this.handleButtonInventory} inventory={this.state.inventory} invenShow={this.state.invenShow} />
                        <ReturnToStory handleReturnStory={this.handleReturnStory} endShow={this.state.endShow} />
                        <Run handleRunContinue={this.handleRunContinue} runShow={this.state.runShow} runDia={this.state.runDia} runClass={this.state.runClass} />
                    </div>
                ) : ("")}

                {this.state.gameover ? (
                    <div className="gameover">
                        <p className="killedText">You have been killed! <br />Game Over!</p>
                        <button onClick={this.handleGameOver} className="gameOverBtn">High Scores</button></div>
                ) : ''}

            </div>
        )
    }
}

export default withRouter(Battle)