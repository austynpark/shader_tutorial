#version 330
/*!
@file    008_polygonShape.frag
@author  kyungook.park@digipen.edu
@date    03/11/2021
*/
precision mediump float;

out vec4 FragColor;

uniform vec2 u_resolution;

const float PI = 3.1415926535;

float polygonshape(vec2 position, float radius, float sides){
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;
    return step(radius * cos(PI / sides), cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}

void main()
{
    vec2 position = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(polygonshape(position, 0.5, 6.0));

    FragColor = vec4(color, 1.0);
}
