# Detailed Breakdown of URL Components

Let's take the example URL: https://web.example.com:8080/page/12?filter=term#section2

## Protocol Scheme (``https``):

- Indicates the protocol used for the communication. Here, https stands for Hypertext Transfer Protocol Secure, which means the data is encrypted for security.
- Determines how data is transferred over the network. https is essential for secure communications, especially for e-commerce and personal data.

## Subdomain (``web``):

- A prefix to the domain name, used to navigate to different sections or services of a website.
- Allows for organizing or separating content under the same domain. For instance, blog.example.com might be used for a blog section.

## Domain Name (``example.com``):

- The main address of the website, consisting of a name (example) and a top-level domain or extension (.com).
- Represents the brand or identity of the website and is crucial for user recognition and SEO.

## Port (``8080``):

- The port number follows the domain name, separated by a colon. Here, 8080 is a custom port number.
- Used to access specific services on the server. Port numbers are essential when the default ports (80 for HTTP, 443 for HTTPS) are not used.
- Ports are in 3 classes: 0-1023 System | 1024- 49151 User | 49152 - 65535 Dynamic
- Indicates the techinical ``gate``

## Path (``/page/12``):

- The path directs to a specific resource or page within the website.
- It's used for routing to different pages or resources on the server. It’s also important for SEO and site structure.

## Parameters (``?filter=term``):

- Begins with a question mark (``?``) and includes parameters (``key-value pairs``) that provide additional information for resource retrieval.
- Used for dynamic page generation, searches, filters, and tracking. Crucial for functionalities like search results or data filtering.

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL