#version 330
precision mediump float;
/*!
@file    006_circleShape.frag
@author  kyungook.park@digipen.edu
@date    03/02/2021
*/
out vec4 FragColor;

uniform vec2 u_resolution;

float colorCircle(float radius, vec2 FragCoord) {
    return step(length(FragCoord - 0.5f), radius);
}

void main()
{   
    vec2 position = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0f, colorCircle(0.2f, position), 0.0f);
    FragColor = vec4(color, 1.0f);
}
