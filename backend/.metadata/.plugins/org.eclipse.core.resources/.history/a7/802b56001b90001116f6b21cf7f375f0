package com.naukri.middleware;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.naukri.service.CustomUserDetailsService;

import java.io.IOException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtHelper extends OncePerRequestFilter {
	
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
    private CustomUserDetailsService userService; // We need this to load user details from the DB

	@Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        // 1. Get the Authorization header from the request
        String authHeader = request.getHeader("Authorization");
        String token = null;
        String username = null;

        // 2. Check if the header starts with "Bearer "
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7); // Remove "Bearer " prefix
//            username = jwtUtil.extractUsername(token); // Use JwtUtil to get the name
            try {
                username = jwtUtil.extractUsername(token);
            } catch (Exception e) {
                filterChain.doFilter(request, response);
                return;
            }
        }

        // 3. If we have a name but no authentication in the context yet
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            
            // Load user details from database
            UserDetails userDetails = userService.loadUserByUsername(username);

            // 4. Validate the token using JwtUtil
            if (jwtUtil.validateToken(token, userDetails)) {
                
                // 5. Create the Authentication object
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                // 6. Set the authentication in the context (Log the user in for this request)
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        // 7. Continue the filter chain
        filterChain.doFilter(request, response);
    }
	

}
