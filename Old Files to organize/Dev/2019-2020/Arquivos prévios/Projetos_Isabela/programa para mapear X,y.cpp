#include <stdio.h>
int mapgen(int x, int mx, int Mx, int my, int My)
{
  return (x-mx)*(My-my)/(Mx-mx)+my;
}

int mappad(int x)
{
  return x/4;
}

int main (void)
{
	int x,mx,Mx,my,My;
	x=4;
	mx=0;
	Mx=1024;
	my=0;
	My=256;
	printf("mapgen: \t%d\n"	,mapgen(x,mx,Mx,my,My));
	printf("mappad: \t%d\n"	,mappad(x));
	
	
	
	
	
}
