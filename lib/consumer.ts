// import redis
import * as redis from "redis";

// create subscriber
const subscriber: redis.RedisClient = redis.createClient();

// message count
let count: number = 0;

// listen on subscribed channels
subscriber.on("message", (channel, message) => {
    // increment count
    count++;

    // log
    console.log(count, "Subscriber received", message, "in", channel);
});

// subscribe to #channel
subscriber.subscribe("#channel");
