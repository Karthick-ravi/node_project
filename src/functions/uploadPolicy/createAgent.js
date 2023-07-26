import agentModel from "../../models/agent"

async function createAgent(agentData, companyData) {
    try {

        var agentExists = await agentModel.findOne({ agentName: agentData.agent, companyId: companyData._id })

        if (!agentExists) {
            let newAgentData = {
                agentName: agentData.agent,
                companyId: companyData._id
            }

            var agent = new agentModel(newAgentData)
            agentExists = await agent.save()
        }

        return agentExists

    } catch (error) {
        console.log(error, "agent create file error")
    }

}

export default createAgent