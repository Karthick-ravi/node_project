import mongoose from "mongoose"

const agents = new mongoose.Schema(
    {
        agentName : { type : String, required: [true, "Required agent name"] },
        companyId : { type : String, required: [true, "Required Company ID"] },
    },
    { timestamps: true, versionKey: false }
)

agents.set('toJSON', { virtuals: true, transform: (doc, ret, options) => { delete ret._id; } })

const agentsModel = mongoose.model("agents", agents)
export default agentsModel
