import { NextResponse } from "next/server";
import prisma from "../../../../prisma";  // Import Prisma client

interface DonationRequestBody {
    address: string;
    donationDate: string;  // ISO 8601 date string
    totalParticipants: number;
    bountyAmount: number;
}

export const POST = async (req: Request) => {
    try {
        // Parse and validate request body
        const { address, donationDate, totalParticipants, bountyAmount }: DonationRequestBody = await req.json();

        // Validate required fields
        if (!address || !donationDate || !totalParticipants || !bountyAmount) {
            return NextResponse.json({
                message: "Invalid Data: All fields are required.",
            }, { status: 422 });
        }

        // Validate donationDate format (ISO 8601 format)
        const parsedDate = new Date(donationDate);
        if (isNaN(parsedDate.getTime())) {
            return NextResponse.json({
                message: "Invalid Data: Donation date is invalid.",
            }, { status: 422 });
        }

        // Validate totalParticipants and bountyAmount are numbers and greater than 0
        if (typeof totalParticipants !== 'number' || totalParticipants <= 0) {
            return NextResponse.json({
                message: "Invalid Data: Total participants must be a positive number.",
            }, { status: 422 });
        }
        if (typeof bountyAmount !== 'number' || bountyAmount <= 0) {
            return NextResponse.json({
                message: "Invalid Data: Bounty amount must be a positive number.",
            }, { status: 422 });
        }

        // Create a new donation entry in the database
        const donation = await prisma.donation.create({
            data: {
                address,
                donationDate: parsedDate,
                totalParticipants,
                bountyAmount,
            },
        });

        return NextResponse.json({ donation }, { status: 201 });  // Use 201 Created for successful POST requests
    } catch (error) {
        console.error('Error creating donation:', error);  // Log detailed error information

        return NextResponse.json({
            message: "Server Error",
            error: error instanceof Error ? error.message : 'Unknown error',  // Provide detailed error message
        }, { status: 500 });
    }
};
