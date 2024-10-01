/** @format */

export async function fetchHygraph(query: string) {
	const response = await fetch(
		'https://sa-east-1.cdn.hygraph.com/content/cm0dw0y25045q07vyj5b0ip41/master',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MjYxNjIwOTYsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY20wZHcweTI1MDQ1cTA3dnlqNWIwaXA0MS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1zYS1lYXN0LTEuaHlncmFwaC5jb20vIiwic3ViIjoiYjQzOWUwYmYtYjBlOC00MjBjLTg1NDMtMmUwMWVmNTU2MzI0IiwianRpIjoiY20wemtjZG5qMDA5dDA2bHJnNXFwNTYzZCJ9.a1RT5Lv0NpQMVy3Y6-i8Sl0OC9xbrFJbOJ-ZAy_i1o9vWANepCsuQCeBgQPHf6w782t-H0ISws4BFQno0NekSQzwXf_lbgyTbnY5adXCr9VBy8aGxqY8dZ2szwL69AgholHFvABAK9jAPVnsiPIrpJsN-g0GmHQFrbdMzOLNWS2XWyDKbzudbGfqjqAxu0nAF8QLvqwrzTLTHDgiJ6kFL0O2jl0BaaBNM-iOSxnNfHV_w7XMtcqImx2RuvXDSNcjE7oXpwfnNMhmqPuOyjCfbc79dRtq794dq6501pNkuc8j8bKo5unN1H-NPkmw8UkRkBm0gqQWevdhj5gKQiWveKmJxsldesqxe324crqlZV-ypXETPJIMzqBMO5tsqUd4PFq-4lLMP1KXtq5MyGQoL8MOhbA7zEqfe_UanJONRH6U_8CDL97cCq6B7g7kAyH_kS2Y8vPOk5MsFk7-Z4kAovFSSiAmQJMEbqb7mclF4iqIIz1OFDx0IQzNkDx5uFwvKlg3E6BJ1_FUo_3q8Ufc6zhCr8cGT449TlWZAls0gj5zOskvUqZp62GxYyAfX0oh9XF8rH-R0H1T4cvCDXPQHQK-xRNB0S6QaNNIMtwwyLVJnmP7TVGkCrKEO8Vdny2Rcx5BeTGeTEkgfUb3LxlOWKVHpJRGInLzecyadZO2iLA`,
			},
			body: JSON.stringify({ query }),
			next: {
				revalidate: 10,
			},
		},
	);

	const { data } = await response.json();
	return data;
}
