import http from './httpService';
import config from '../config.json';
export function createPost(post) {
    return http.post(config.api_post, post);
}
