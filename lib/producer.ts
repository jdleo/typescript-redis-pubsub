// import redis
import * as redis from "redis";

// create publisher
const publisher: redis.RedisClient = redis.createClient();

// delay between messages (in ms)
const delay: number = 0.01;

// run every 'delay' ms
setTimeout(function run(): void {
    // publish random 10 byte message to #channel
    publisher.publish("#channel", Math.random().toString(36).substring(2, 15));

    // call again
    setTimeout(run, delay);
}, delay);
