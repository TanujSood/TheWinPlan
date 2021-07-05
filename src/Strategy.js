import './css/Strategy.css'
import Card from './strategy_card'
import strategy1 from './assets/strategy1.png'
import strategy2 from './assets/strategy2.png'
import strategy3 from './assets/strategy3.png'


function Strategy() {
    return (
        <div className="strategy">
            <h1>Strategy</h1>
            <p className="strategy-description">There is no recipe for living that suits all cases, hence their strategy may not be your election strategy. We believe that elections are won or lost even before polling has finished. The luck of the contestant and their party lies in the right strategy. What defines the success is largely your planning for a great strategy and execution of the same. While most create some strategy, we create the right strategy that is backed by the precise execution of the same. 
We understand that dynamics change every day, they change with events and they change with stages of the election. While an election strategy is a set of decisions and well-crafted planning based on various indicators, we at the WINPLAN not only help you create a strategy that is based on your strengths, driven by your core values; but we also execute the same for you and monitor the same for you.</p>
            <div className="row1">
                <div className="column1">
                    <Card title='Planning Stage' imgurl={strategy1} description="Your action plan for election has to be set for wining with your major focus on constituencies. Whether it means to determine the key constituencies for you or articulating your message across, we have it covered in our planning. 
The information on your voters set, your key influencers and your key supports will shape up your plan to win. While planning is an extensive exercise; at the same time defining the role for each supporter, frontline worker, influencer, core member goes a long way in defining the outcome of an election. Hence an integrated election plan with consideration in key areas will help in overall success." alt="Planning"/>
                </div>

                <div className="column1">
                    <Card title='Research Stage' imgurl={strategy2} description="Although research is considered to be the backbone for data collection it is very important to understand the innovative ways of collecting the data. The data collection for election research that is based on experiential methods is very vital for the right interpretation for research. We use the most modern methodologies for research that are backed by technology support to ensure the efficacy and output of research. With multiple channels of collecting and assimilating information, research is more accurate and can be aligned to overall planning for elections." alt="Research"/>
                </div>

                <div className="column1">
                    <Card title='Analytics Stage' imgurl={strategy3} description="The information gathered through multiple sources online, offline and research methodologies, we use the most advanced tools to analyze the same. Advanced analytics help us to draw multiple references, connections, and indicators. These results help you take quick and relevant decisions. The decisions driven by information and data are far more effective than the ones planned as ad-hoc. With the trends and forecast, you can decide where tweaking is needed in the overall election planning and execution. The results can help you decide and administer your overall outreach, campaign, digital communication, and on-ground messaging with the party workers." alt="Analytics"/>
                </div>
            </div>
        </div>
    )
}

export default Strategy