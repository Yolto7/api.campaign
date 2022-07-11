const { Schema, model } = require('mongoose');

const schema = Schema({
    name: {
        type: String,
        required: [true, 'The campaign name is required']
    },
    startDate: {
        type: Date,
        required: [true, 'The campaign start date is required'],
    },
    endDate: {
        type: Date,
        required: [true, 'The campaign end date is required']
    },
    details: {
        type: String,
        required: [true, 'The campaign details is required']
    },
    status: {
        type: Boolean,
        default: false
    }
});

schema.methods.toJSON = function() {
    const { __v, _id, ...campaign  } = this.toObject();
    campaign.id = _id;
    campaign.startDate = new Date(campaign.startDate).toISOString().split('T')[0]
    campaign.endDate = new Date(campaign.endDate).toISOString().split('T')[0]
    return campaign;
}

module.exports = model('Campaign', schema );
