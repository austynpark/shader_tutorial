#version 330
precision mediump float;

out vec4 FragColor;

uniform vec2 u_resolution;
uniform float u_time;

mat2 scale(vec2 scale){
    return mat2(scale.x, 0.0, 0.0, scale.y);
}

float circleshape(vec2 position, float radius){
    return step(radius, length(position - 0.5));
}

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0, 0.0, 0.0);

    vec2 translate = vec2(sin(u_time) * 0.5, cos(u_time) * 0.2);

    coord -= vec2(0.5);
    coord = scale(vec2(sin(u_time) - 2)) * coord;
    coord += vec2(0.5);
    coord -= translate;

    color += vec3(circleshape(coord, 0.2));

    gl_FragColor = vec4(color, 1.0);
}
