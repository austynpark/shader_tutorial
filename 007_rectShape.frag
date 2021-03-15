#version 330
precision mediump float;
/*!
@file    007_rectShape.frag
@author  kyungook.park@digipen.edu
@date    03/10/2021
*/
out vec4 FragColor;
uniform vec2 u_resolution;

float rectShape(vec2 position, vec2 scale){
    scale = vec2(0.5) - scale * 0.5;
    // step returns if scale.x <= position.x and so on
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    // check position if it is from bottom
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x * shaper.y;
}

void main()
{
    vec2 position = gl_FragCoord.xy / u_resolution;
    FragColor = vec4(vec3(rectShape(position, vec2(0.5, 0.5))), 1.0);
}