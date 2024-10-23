import React from "react";

// load a habit for rendering
const sampleHabit = require('./habit.json')
console.log("habit")
console.log(JSON.stringify(sampleHabit))

const habitHistoryMap = {}
sampleHabit.records.map((record) => {
    const period = record.timestamp.toString().substring(0, 10)
    if (!habitHistoryMap[period]) {
        habitHistoryMap[period] = {
            period: period,
            count: 0,
            positive: 0,
            negative: 0
        }
    }
    habitHistoryMap[period].count += (record.count || 0);
    habitHistoryMap[period].positive += (record.positive || 0);
    habitHistoryMap[period].negative += (record.negative || 0);
})
console.log("habitHistoryMap")
console.log(JSON.stringify(habitHistoryMap))

sampleHabit.history = Object.entries(habitHistoryMap)
    .map(([period, record]) => ({
        period,
        count: record.count,
        positive: record.positive,
        negative: record.negative,
    })).toSorted((a, b) => b.period - a.period);

// once a habit is loaded, we can render it
let habit = sampleHabit

console.log("habit.history")
console.log(JSON.stringify(habit.history))

const ratings = {
    name: habit.name,
    description: habit.name,
    chartTitle: habit.name,
    ratings: [
        { title: "...", description: "...", length: 10, value: 5 },
    ],
};

ratings.maximum = habit.history.map((history, acc) => {
    return history.count;
}).reduce((result, item) =>{
    return Math.max(result, item)
}, 2000)

console.log("ratings")
console.log(JSON.stringify(ratings))

ratings.ratings = habit.history.map((history, idx) => {
    return {
        title: history.period,
        description: `Total Count ${history.count}/${ratings.maximum}`,
        length: ratings.maximum/100,
        value: history.count/100,
        positive: history.positive/100,
        negative: history.negative/100,
    };
});
console.log("ratings.ratings")
console.log(JSON.stringify(ratings.ratings))


export {
    habit as habit,
    ratings,
};
