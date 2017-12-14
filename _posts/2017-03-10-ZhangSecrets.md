---
layout: post
title:  "Secrets in Math: How do We Fly? "
date:   2017-03-10
volume: 2
categories: original
field: Mathematics
featureImage: Figure4.png
tags: [flight, tensors, d'Alembert's paradox]
filename: 2017-03-10-ZhangSecrets
author:
  - name: Zhang, Simon
    affiliation:
      - Integrated Science, Class of 2018, McMaster University
abstract: |- # this means to ignore newlines until next tag
  This article covers the history of flight from 1400s to the modern era, focusing on d'Alembert's paradox and explanations of how lift is created. It is unnerving to think that it wasn't until 2008 that scientists were finally able to answer the question of how planes remain in the air. D'Alembert's paradox has troubled mathematicians and aeronautic experts for years. It was a simple statement made in 1749, but the implications have influenced the field of fluid dynamics for centuries to come. The statement made by d'Alembert essentially concluded that there is no mathematical explanation for the physical observation of drag on any solid object moving through a fluid, making airborne flight an unexplainable enigma. However, in 2008, a paper was published finally providing a coherent resolution to d'Alembert's paradox as well as fully explaining how lift and drag are created (Hoffman and Johnson, 2008; 2009). After disproving the previous theories provided by Prandtl and Kutta-Zhukovsy, Johan Hoffman and Claes Johnson built on the work of d'Alembert and Stokes and were able to identify the instability mechanism which their predecessors overlooked. Using this mechanism, they were able to explain the cause of net drag on the wing. With this understanding, airplane developers can take greater steps to improving the design of airplane wings and make air travel much more efficient.
---

## Introduction

Humans have always been interested in conquering new frontiers. This was evident thousands of years before the modern era, in Ancient Greece; from the myths of gods overhead to studying the treks of the stars through the heavens, they were seduced by the concept of flight. Although humans have been interested in flying for thousands of years, the field of aeronautics only began in 1485 with Da Vinci's design of "The Ornithopter". However, it took until 1903 for the first flying machine to be invented by the Wright Brothers, meaning it took over 400 years to go from design to creation (NASA, 2016). That being said, the mathematics required to achieve these developments has lagged even further behind the physical advancements in the real world. This rift between the mathematics and engineering behind flight started in 1749 with the formation of d'Alembert's paradox (Claes Johnson, 2012a). Jean le Rond d'Alembert was a French mathematician who used Euler's equations to show that the drag on a body moving through in an negligibly viscous (inviscid) and incompressible fluid was zero. This did not align with any observations made in the physical world and caused the engineering branch of fluid mechanics, known now as hydraulics, to separate into its own field, different from the field of theoretical fluid mechanics. It was only recently that the mathematics finally caught up with the physical observations. This occurred in 2008 when an explanation and resolution for d'Alembert's paradox was sufficiently tested and explained by Johan Hoffman and Claes Johnson (Hoffman and Johnson, 2008; 2009). This means that for over 250 years, we had no concrete answer to the fundamental question of: "What keeps planes up?" This paper informs readers about the history of the development of the mathematics behind fluid dynamics as well as to depict how the current resolution of d'Alembert's Paradox explains the possibility of flight.

## General Theory of Flight

Though humans had been interested in flight for thousands of years beforehand, the individual who made the first documented strides towards understanding was Leonardo da Vinci (NASA, 2016). He marvelled at how birds were able to fly in the sky while he was forcibly earthbound. For many years, he studied birds, focusing on how they flew and their wing structure. With all his knowledge, he set out to design one of the most complicated machines of his time and although his fabled "Ornithopter" was never constructed, his detailed blueprints laid down the framework for the development of fluid dynamics as a field. The earliest functional flying machines were produced between the 1800s and the 1850s (NASA, 2016; Gray, 2016). They were simple fixed-wing gliders created by George Cayley using the many prototypes method. The many prototype approach involves the development and testing of a design, observing what had worked, what had not, and then improving on the original design for the next prototype. This was the approach he had to take because the mathematics prior to this development suggested that flight was impossible. This was evident in 1749, when French mathematician Jean le Rond d'Alembert used Euler’s equations for low-viscosity fluids, which assumed an incompressible and inviscid fluid with zero friction along the surface, to demonstrate that the high pressure in the front of the sphere would be balanced out by an equal high pressure at the rear of the sphere in Figure 1.

{% include figure.html
            fig="Figure1.png"
            title="Figure 1"
            caption="The potential flow solution according to the Navier-Stokes equation, with blue areas representing areas with low pressure while red areas represent areas of high pressure. Stokes and d'Alembert both found that the two areas of high pressure push against the sphere and cancel each other out resulting in no net drag, a conclusion which did not agree with observations made in the physical world (Claes Johnson, 2012a). (Image adapted from Incredio, 2009)." %}

This meant that the air flowing around a sphere would not create any net drag. He was aware that was untrue in the physical world, but d'Alembert would never be able to explain this disconnect between his math and the world, stating that:

"It seems to me that the theory (potential flow), developed in all possible rigour, gives, at least in several cases, a strictly vanishing resistance, a singular paradox which I leave to future Geometers to elucidate" (Claes Johnson, 2012a).

This conundrum was later designated "d'Alembert's paradox", and split the field of fluid studies into the physical-world observation-based field of hydraulics, and the theoretical, math-based field of fluid mechanics. George Cayley's many prototypes method allowed for physical observation including ideal wing shapes, the best angle of attack, and other ways to increase lift. These observations were used to derive equations that allowed for calculations, but how exactly the small changes he made to the design of his prototype actually kept the plane in the air was still not yet understood. However, this method did pay off for George Cayley because after 50 years of prototypes he had finally designed a glider that was capable of flight in 1849 (Gray, 2016).

In 1822, the Navier-Stokes equations were developed by Claude-Louis Navier and George Gabriel Stokes. These equations were created to describe how a velocity vector field affects a fluid, or in terms of flight: how air flows around the wing. In 1851, Stokes, using these equations, modelled the flow of a fluid around the sphere in Figure 1 (Incredio, 2009). He found that if he decreased the viscosity of the fluid, the drag on the sphere would also decrease, which was similar to what d'Alembert had found. This was more evidence supporting the idea that low-viscosity air around a wing would not produce any drag, which did not reflect reality. At this point, George Cayley had proven that flight was possible, while theoretical fluid mechanics had barely taken off.

## Prantl's Theory of No Slip Boundary

This disconnect continued to grow when the Wright brothers, Orville and Wilbur Wright, built a flying machine capable of self-powered flight in 1903 (NASA, 2016). It was a simple machine, but it was capable of sustaining itself in the air for 59 seconds and had travelled a total distance of 852 feet. This was a great accomplishment, which mathematics had determined to be theoretically impossible. This achievement brought new life into the field of fluid dynamics as scientists rushed to come up with a theory of how the Wright Brothers made their machine fly. One of the first individuals who attempted to rectify the disconnect between the mathematics of flight and physical flight was the German physicist Ludwig Prandtl. In 1904, he published his theory of flight (Hoffman and Johnson, 2008; 2009). He knew of d'Alembert's work and stated that his assumption of a slip-boundary was incorrect. He believed that at low viscosities, the surface and the molecules of the fluid would still interact and exert a friction force against the direction of fluid flow.

His theory of flight suggested that across the surface of a wing, a very thin layer of air would form, which he called the boundary layer. The part of the boundary layer that was immediately adjacent to the solid surface was called the no-slip boundary layer (Hoffman and Johnson, 2009; Claes Johnson, 2012b). He suggested that in this no-slip boundary layer the molecules of the fluid would collide and stick to the surface as it moved across it, meaning that the velocity of the molecules in this layer would move at the same velocity as the surface it was attached to. Meanwhile, for the rest of the boundary layer, the molecules of the fluid would also experience the effects of friction, but these effects would decrease to zero when the molecules were sufficiently far away from the surface of the wing, at the end of the boundary later. This assumption was based on the belief that the strength of adhesion between the solid boundary and the molecules were larger than the strength of cohesion between molecules. Using this assumption, he built a set of equations that could be used for this boundary condition, which was different than the general Navier-Stokes equations for the fluid outside of this boundary. Thus, Prandtl had shown that d'Alembert had not accounted for the formation of this boundary layer near the surface and that the drag was due to the change of momentum of the molecules in the boundary layer experiencing friction. Prandtl's resolution was also able to determine the source of turbulence as the collision of the different velocity molecules in the boundary layer. This disrupts the normally laminar boundary condition into a turbulent boundary condition once a threshold is overcome (Hoffman and Johnson, 2009).

## Kutta-Zhukovsky Theory of Circulating Airflow

Soon after Prandtl, Martin Wilhelm Kutta and Nikolai Zhukovsky separately published their theories of lift (Hoffman and Johnson, 2009). They thought that flights were due to a difference in pressures on the wing. They assumed that air would be trapped circulating around the wing going from over top the surface and rotating into opposite direction of movement beneath the bottom of the wing; this is depicted in Figure 2 (Claes Johnson, 2012b).

{% include figure.html
            fig="Figure2.png"
            title="Figure 2"
            caption="Kutta-Zhukovsy's circulation theory suggests that there was a circulating airflow which revolved around the wing. The molecules above the wing would move in the same direction as the circulating airflow and would result in a low pressure on the upper surface of the wing. The circulating airflow at the lower surface of the wing would act against the natural direction of airflow, which caused a retardation of velocity and would result in an increase in pressure. This pressure gradient between the upper and lower surface acts on the wing to create lift. Image adapted from (Hoffman and Johnson, 2009)." %}

Their model found that the addition of this circulating air would cause the velocity of the molecules to increase in speed, in the direction of vortex movement, at the top of the wing, and slow down as it moves against the curl of the vortex beneath the wing. This would cause a difference in pressure favouring the upper surface of the wing, which would form a pressure gradient that would force the wing upwards (Hoffman and Johnson, 2009).

Exactly how the circulating air was formed was not clear, but it was thought to be the result of the sharp trailing edge guiding the motion of the air around the wing (Claes Johnson, 2012b). Though neither theory was confirmed, both Prandtl's theory of drag and Kutta-Zhykovsky's theory of lift would be used in calculations for 100 years and was sufficient to design aerodynamic wings and to further develop the field of fluid mechanics. For 100 years, this was the most widely accepted theory of flight and was found in all advanced fluid dynamic textbooks (Hoffman and Johnson, 2009; Claes Johnson, 2012b).

##  Hoffman and Claes' Instability Solution

Before any steps can be made towards understanding the mathematics of flight, a basic understanding of vector calculus and fluid mechanics is required.

Vectors are simply a subset of tensors known as first-rank tensors. On a similar vein, scalars are called zeroth-rank tensors. Tensors are also composed of a magnitude and a direction. Similarly to how vectors can describe forces at a point, a tensor describes the forces acting on a surface. Taking a hypothetical solid shape, it can be assumed that the forces on it could be represented as the net vector force acting on the center of mass. However, in fluid dynamics, this interpretation is too limited because it does not take into account the movement of fluid flowing across a surface. This movement will cause a force on the surface that is parallel to the direction of the surface. Thus, tensors are better used to represent the mathematics behind fluid motion. This also means that each direction of the space would have 3 vectors built into the tensor for the face orthogonal to that direction, resulting in a net total of 9 different vectors; this can clearly be shown in Figure 3.

{% include figure.html
            fig="Figure3.png"
            title="Figure 3"
            caption="Each Tensor T is composed of 3 other vectors, σ, which show how the plane on each face are affected by some force. Image adapted from (Sanpaz, 2011) " %}

## Variables

Hoffman and Johnson were able to solve d'Alembert's paradox using 5 simple equations. These equations involve the variables: u, which is a velocity vector composed of u1,u2,u3, also written as u = (u1,u2,u3); pressure, p; viscous shear stress, σ; volume force, f; the net flow velocity, g; and β, which is the small skin friction coefficient (Hoffman and Johnson, 2008; 2009; Claes Johnson, 2012c).

## Equations

The following 5 equations are the ones which Johan Hoffman and Claes Johnson started with to proof their theory:

$$
\begin{align}
  \dot{u} + (u\cdot{}\nabla)u + \nabla{}p - \nabla\cdot\sigma &= f & in\ \Omega\times{}I \\
  \nabla\cdot{}u &= 0 & in\ \Omega\times{}I \\
  u_n &= g & on\ \Gamma\times{}I \\
  \sigma_x &= \beta{}u_x & on\ \Gamma\times{}I \\
    u(\cdot, 0) &= u^0 & in\ Omega
\end{align}
$$

First, it is important to note the dimensions to which these equations apply. The first 2 equations involve a volume, $$Ω$$, in $$\mathbb{R}^3$$ and a time interval, $$I$$, while the next 2 equations involve the boundary surface, $$Γ$$, that encompasses $$Ω$$ and time interval I. Essentially, the first 2 equations describe properties of a volume and the next 2 equations describe the surface of that volume. The last equation deals with the volume Ω at time 0 because this is standard notation for setting an initial variable condition. Equation 1 is the Navier-Stokes equation solved for force, $$f$$. In this equation, $$u$$ ̇ denotes the derivative of velocity with respect to time, $$\frac{d}{dt}u(t)$$. The second equation shows that the divergence velocity, $$∇·u$$, of the fluid is 0. This is based on the assumption that the fluid is incompressible, one which all other major theories have made. Equation 3 states that the normal velocity, $$u_n$$, of the fluid at the boundary is equal to the net flow velocity $$g$$ across the boundary. This quantity is zero for an airplane wing, because no air is flowing directly into or out of the wing. In the fourth line, we have that the tangential stress, σs, is equal to the tangential velocity, us, multiplied by skin friction coefficient, $$β$$ (Hoffman and Johnson, 2008; 2009). Here we note that Prandtl had set the value of $$β$$ to be large due to his assumption of a no-slip boundary, and stating that the tangential friction between the air and the wing was what caused the formation of drag. D'Alembert, Johan Hoffman, and Claes Johnson, on the other hand, assumed that there was no friction at the boundaries ($$β$$ = 0). Solving for potential flow, Hoffman and Johnson got the same result as d'Alembert: a lack of drag $$f = 0$$ (Hoffman and Johnson, 2008; 2009; Claes Johnson, 2012c). However, what they did realize was that this result only existed in theoretical situations, and that in the real world, this solution was unstable due to the two points of instability in the equation (Hoffman and Johnson, 2008; 2009; Claes Johnson, 2012c). The first point being: $$σ=∇·(2νε(u))$$ and $$σs=2νε(u)_s$$, where $$ν$$ is the viscosity of the fluid and $$ε(u)$$ is the usual velocity strain (Hoffman and Johnson, 2008; 2009). Although small, the effect of viscosity in these equations is what causes the potential solution to fail as a physical solution.

This instability can be visualized by considering the difference between two different yet similar states. First, let $$(v,q,\tau)=(u-\bar{u},p-\bar{p}, \sigma-\bar{\sigma})$$ then the new equations appear in the form (Hoffman and Johnson, 2008; 2009):

$$
\begin{align}
  \dot{v}+(u\cdot{}\nabla)v + (v\cdot{}\nabla)\bar{u} + \nabla{}q - \nabla\cdot\tau &= f &in\ \Omega\times{}I \\
  \nabla\cdot{}v &= 0 &in\ \Omega\times{}I \\
  u\cdot{}n &= g-\bar{g} &on\ \Gamma\times{}I \\
  \tau_x &= 0 &on\ \Gamma\times{}I \\
  v(\cdot,0) &= u^{0} - \bar{u}^0 &in\ \Gamma
\end{align}
$$

The key part of these equations is the $$\nabla\bar{u}$$, which is the divergence of \bar{u}. As shown by the incompressibility assumption in equations 2 and 7, \nabla\bar{u} must also equal 0. As stated before, u is a velocity vector built with component functions: $$(u1,u2,u3)$$, thus  must also be built from similar component functions $$(\bar{u}_1,\bar{u}_2,\bar{u}_3)$$ then $$\nabla{}\bar{u}$$ is a 3 by 3 matrix in the form:

$$
\begin{align}
\nabla\bar{u} = \begin{vmatrix}
\frac{\partial\bar{u}_1}{\partial{}x} & \frac{\partial\bar{u}_1}{\partial{}y} & \frac{\partial\bar{u}_1}{\partial{}z} \\
\frac{\partial\bar{u}_2}{\partial{}x} & \frac{\partial\bar{u}_2}{\partial{}y} & \frac{\partial\bar{u}_2}{\partial{}z} \\
\frac{\partial\bar{u}_3}{\partial{}x} & \frac{\partial\bar{u}_3}{\partial{}y} & \frac{\partial\bar{u}_3}{\partial{}z} \\
\end{vmatrix}
\end{align}
$$

When finding the trace of this matrix, it was found that it was equal to the equation for the divergence, which was 0. This results in the trace of this matrix also being equal to 0. Since the trace is also defined as the sum of the possible eigenvalues, or solutions to the matrix, there must be both positive and negative eigenvalues. This plays a major role in finding the vorticity solution of this situation. By applying the cross divergence operator $$\nabla{}\times$$ to the Navier Stoke's equation, we can get the vorticity $$ω$$ equation, where it is important to know that $$\omega=\nabla\times{}u$$. Since it is a cross product, the direction of the end vector depends on $$u$$, which means that ω is highly affected by the sign of the solution. Since both positive and negative solutions are possible it is easy to see how the potential solution is unstable.

{% include figure.html
            fig="Figure4.png"
            title="Figure 4"
            caption="A simulation using the Wind Tunnel software showing that the intensity of the lift force (blue, low pressure) is about 9.85 times as big as the intensity of the drag force (red, high pressure). There is also no high pressure at the trailing edge of the wing, which was observed in Figure 1 (Algorizk, 2015)." %}

Thus, in their paper "The Mathematical Secret of Flight", Hoffman and Johnson concluded that flight was only possible due to the production of a large lift to drag ratio, $$\frac{L}{D}$$ (see Figure 4). This ratio compares the amount of lift generated to the drag produced, therefore a ratio of 10 would mean that a plane is able to travel 10 metres for every 1 metre it descends (Hoffman and Johnson, 2008; 2009; Claes Johnson, 2012c). Their theory of flight was centered around 3 main ideas. These include the attachment of air to the leading edge of the wing, increasing the pressure against the motion of the wing. The lift created through the pressure drop at the top of the wing causes air to push upwards on the wing. Both of these are evident in d'Alembert's and Stokes' potential solutions; however the issue they had was that the potential solution also had an additional high pressure zone behind the solid surface. Hoffman and Claes were able to realize that the potential solution behind the airfoil was very unstable since it is caused by the collision of different flows of fluid, therefore in real life any small perturbations of the flow around the wing would cause the potential flow at the back of the wing to collapse into a different equation. They found that instead of potential flow at the trailing edge, a rotational flow would form instead due to the collision of molecules behind the trailing edge from the bottom and top of the wing. This created an oscillating velocity and the formation of alternating, counter-rotating pressure vortices (see Figure 5) (Hoffman and Johnson, 2009; Claes Johnson, 2012c).

{% include figure.html
            fig="Figure5.png"
            title="Figure 5"
            caption="A simulation using the Wind Tunnel software showing that the alternating counter rotating pressure vortices at the trailing edge of the wing (Algorizk, 2015)." %}

These vortices would form with a low pressure inside that would negate the high pressure surrounding them. This instability mechanism is what decreases the pressure at the trailing edge of the wing and causes a net high pressure pushing against the wing, which is where the drag originates. The forward attachment of the flow is physical, due to the solid boundary and not from opposing flows, which results in much smaller perturbation growth than at rear separation, which is why vortices only form at the trailing edge (Hoffman and Johnson, 2008; 2009; Claes Johnson, 2012c).

## Conclusion

Finally, after 250 years, a coherent resolution to d'Alembert's paradox has been found. After proving Prandtl and Kutta-Zhukovsy incorrect, Hoffman-Johnson reconciled the mathematics of field dynamics with observations in the physical world. They were able to determine that d'Alembert's potential was not stable due to the creation of both positive and negative solutions to the vorticity equation. This instability causes the formation of counter-rotating vortexes that counteract the high pressure at the trailing edge of the wing. This results in a net drag pushing against at the movement of the wing, a simple physical observation that has only now been given mathmatical support. Their solution has been tested in many computations and has correctly mimicked the peculiarities of real life. Those who are scared of flying may now breathe a sigh of relief as we can finally fully answer "What keeps planes up?". Thanks to this finding, airplane developers are take greater steps to improving the design of airplane wings and make air travel much more efficient.

## Acknowledgements

I would like to thank George Dragomir for being my supervisor in this project as well as thank the Integrated Science Program for giving me this opportunity to do this research.

{% include references.md
            reference="
Claes Johnson, 2012a. D'Alembert's Paradox. [video online] Available at: <https://www.youtube.com/watch?v=QPTjuS5G3dY > [Accessed 16 March 2016].

Claes Johnson, 2012b. Incorrect or Trivial Theories of Flight. [video online] Available at: <https://www.youtube.com/watch?v=LNLXdlXKvL8> [Accessed 16 March 2016].

Claes Johnson, 2012c. New Theory of Flight. [video online] Available at: <https://www.youtube.com/watch?v=t7e_6bkUFzE > [Accessed 16 March 2016].

Gray, C. 2016. Flying Machines - Sir George Cayley. [online] Flying Machines. Available at: <http://www.flyingmachines.org/cayl.html> [Accessed 16 March. 2016].

Hoffman, J. and Johnson, C. 2008. Resolution of d’Alembert’s Paradox. Journal of Mathematical Fluid Mechanics, [online] 12(3), pp.321-334. Available at: <http://link.springer.com/article/10.1007/s00021-008-0290-1> [Accessed 15 Mar. 2016].

Hoffman, J. and Johnson, C. 2009. The Mathematical Secret of Flight. Normat, [online] 57(4), pp.1-25. Available at: <http://www.csc.kth.se/~cgjoh/flightnormat-5.pdf> [Accessed 16 Mar. 2016].

Incredio, 2009. Flow Past a Cylinder. Pressure field and velocity vectors [image online] Available at: <https://en.wikipedia.org/wiki/Potential_flow_around_a_circular_cylinder#/media/File:CylinderVelocityPressure.png> [Accessed 16 March 2016].

NASA 2016. History of Flight. [online] Available at: <https://www.grc.nasa.gov/www/k-12/UEET/StudentSite/historyofflight.html>[Accessed 12 Nov. 2016].

Sanpaz, 2011. Components of the Cauchy stress tensor in Cartesian coordinates. [image online] Available at: <https://en.wikipedia.org/wiki/Tensor#/media/File:Components_stress_tensor.svg> [Accessed 16 March 2016].

Algorizk 2015. Wind Tunnel v1.3.2. iPad [Accessed 16 March 2016].
"
%}
