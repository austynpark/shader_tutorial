#version 330
precision mediump float;
/*!
@file    005_color.frag
@author  kyungook.park@digipen.edu
@date    03/02/2021
*/
out vec4 FragColor;

void main()
{
    vec3 color = vec3(1.0f, 0.1f, 0.2f);
    FragColor = vec4(color, 1.0f);
}
