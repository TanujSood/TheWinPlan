import './css/Strategy.css'
import Card from './strategy_card'
import strategy1 from './assets/strategy1.png'
import strategy2 from './assets/strategy2.png'
import strategy3 from './assets/strategy3.png'


function Strategy() {
    return (
        <div className="strategy">
            <h1>Strategy Headline</h1>
            <div className="row1">
                <div className="column1">
                    <Card title='Planning Heading' imgurl={strategy1} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." alt="Planning"/>
                </div>

                <div className="column1">
                    <Card title='Research Heading' imgurl={strategy2} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." alt="Research"/>
                </div>

                <div className="column1">
                    <Card title='Analytics Heading' imgurl={strategy3} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." alt="Analytics"/>
                </div>
            </div>
        </div>
    )
}

export default Strategy
